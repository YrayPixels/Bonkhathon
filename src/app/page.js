"use client"
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { splashscreen } from './__utils__/utils';
import Image from 'next/image';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, [])

    const [splash, setSplash] = useState(false)
    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <div>
            {splash &&
                <div className='bg-[#FF8A00] h-screen w-full flex flex-row justify-center items-center'>
                    <div>
                        <p className='text-white text-[40px]'>
                            Giggles
                        </p>
                    </div>
                </div>
            }

            <div className="flex h-screen flex-row overflow-scroll bg-[url('/images/bg.png')] w-full">
                {splashscreen.map((item, index) => {
                    if (activeIndex == index) {
                        return (
                            <div key={index} className="h-screen w-10/12 flex flex-row justify-center items-center m-auto" >
                                <div className='space-y-4'>
                                    <div className='flex flex-row justify-center'>
                                        <Image
                                            src={`${item.image}`}
                                            alt='image'
                                            width={item.imageW}
                                            height={item.imageH}
                                        />
                                    </div>

                                    <p className='text-center text-[23px] font-bold'>{item.title}</p>
                                    <p style={{ textAlign: 'center' }} className='w-10/12  m-auto text-[15px]'>
                                        {item.sub_title}
                                    </p>



                                </div>

                            </div>
                        )
                    }

                })}
            </div>
            <div className='h-[150px] w-full fixed bottom-0'>
                <div className='flex flex-row justify-center gap-2 pb-10  pt-5 items-center m-auto'>
                    <div onClick={() => setActiveIndex(0)} className={activeIndex == 0 ? "bg-[#FF8A00] w-[40px] p-0.5 rounded-full" : "bg-[#E6E6E6] w-[20px] p-0.5 rounded-full"}>
                    </div>
                    <div onClick={() => setActiveIndex(1)} className={activeIndex == 1 ? "bg-[#FF8A00] w-[40px] p-0.5 rounded-full" : "bg-[#E6E6E6] w-[20px] p-0.5 rounded-full"}>
                    </div>
                    <div onClick={() => setActiveIndex(2)} className={activeIndex == 2 ? "bg-[#FF8A00] w-[40px] p-0.5 rounded-full" : "bg-[#E6E6E6] w-[20px] p-0.5 rounded-full"}>
                    </div>

                </div>

                <div className={`w-10/12 m-auto flex flex-row ${activeIndex == 0 ? "justify-end" : "justify-between"} items-center`}>
                    {activeIndex !== 0 &&
                        <button>Skip</button>
                    }
                    <button onClick={() => setActiveIndex(activeIndex + 1)} className='bg-[#FF8A00] w-[93px] text-white rounded-lg text-[15px] px-3 py-2'>Next</button>
                </div>
            </div>


        </div >

    )
}
