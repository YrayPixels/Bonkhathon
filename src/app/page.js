"use client"
import React, { useEffect } from 'react'
import { PRIMARY, RED, SECONDARY } from './__utils__/utils'
import FeatureSection from './components/featureSection'
import ExtrasSection from './components/unMatchedConvo'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
export default function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='' style={{ background: PRIMARY, overflowX: 'hidden', }}>
                <div className='w-11/12 px-2 md:px-0 md:w-10/12 m-auto py-10 md:py-20'>
                    <div className='md:flex flex-row justify-center w-full items-center'>
                        <div className='text-start space-y-2 md:space-y-4 md:shrink w-full md:max-w-[700px]'>
                            <div style={{ position: 'relative', maxWidth: 'fit-content', }} className='px-1 shadow md:px-4 md:py-1 rounded-2xl bg-white'>
                                <Image width={37} height={43} className='absolute top-[-15px] right-[-15px] md:top-[-35px] w-[19px] h-[23px] md:w-[37.2px] md:h-[43px] md:right-[-30px]' src="/flag.png" alt="" />
                                <span className='text-[10px] md:text-[16px] w-[37.2px]'> Nigeria&apos;s Leading Service Platform</span>
                            </div>
                            <h1 className="text-[#1A1B41] font-bold text-[32px] md:text-[60px]">Experience the Power of <span style={{ color: RED }}>Connected Possibilities</span></h1>
                            <p className='text-[#828282] text-[16px] pb-10'>Connecting you to the world of services, when you need them most anywhere, anytime. One tap, one problem solved, one step closer to your dreams.</p>
                            <a href="" className='rounded-lg py-2 px-4 bg-[#1A1B41] hover:bg-white hover:border text-white hover:text-[#1A1B41] no-underline '>Join The Waitlist</a>
                            <p className='text-[#828282]'>Be the first to get notified when we launch</p>
                        </div>

                        <div className=" flex w-[310px] m-auto py-2 md:w-[634px] justify-center items-center">
                            <Image width={634} height={634} className='w-[310px] md:w-[634px]' src="/hompage.gif" alt="Servena Gif" />
                        </div>

                    </div>
                </div>
            </div>

            <div className='py-20' style={{
                background: SECONDARY
            }}>
                <div className='text-center text-white'>
                    <h2 className='text-[20px] md:text-[44px]'>Your <span style={{ color: RED }}>Journey</span> to a Happier Life Starts Here</h2>
                    <p style={{}} className='text-[#CECECE] text-[15px] text-[20px]' >Live a happier, easier and fulfilling life by getting anything done through our network of reliable doers.</p>
                </div>

            </div>

            <div className=''>
                <FeatureSection />
            </div>
            <div className='' style={{ background: PRIMARY, zIndex: 12, }}>
                <ExtrasSection />
            </div>


        </>

    )
}
