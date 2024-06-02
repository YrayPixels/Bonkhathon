"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'
import SlideButton from '../components/slidecomplete/slidecom'
import CustomInput from '../components/customInput/customInput';
import { Close } from '@mui/icons-material';

export default function Tasks() {
    const params = useSearchParams();
    let id = params.get('id');

    const [markComplete, setMarkComplete] = React.useState(false)

    return (
        <div className='w-11/12 py-4 m-auto'>

            <div>

                <h2>Task Title</h2>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.s

                </p>
            </div>
            <div>
                <SlideButton onComplete={() => setMarkComplete(true)} />
            </div>

            {markComplete &&
                <div className='bg-black/50 h-screen fixed top-0 w-screen left-0'>

                    <div className='bg-white  w-full pt-10 absolute bottom-0 h-[50%] m-auto p-4 rounded-t-xl mt-20'>
                        <Close className='absolute right-4 top-4 cursor-pointer' onClick={() => setMarkComplete(false)} />
                        <div className='flex flex-col justify-center h-[50%]'>
                            <div>
                                <h2 className='font-bold text-center'>Kindly Upload Pictures as Proof</h2>
                            </div>
                            <div className='w-full flex justify-center py-10 rounded-full'>
                                <input multiple type="file" name="file" id="file" className='' />
                            </div>
                            <div className='justify-center flex'>
                                <button className='p-3 w-[50%] m-auto bg-[#FF8A00] text-white font-bold rounded-2xl'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}
