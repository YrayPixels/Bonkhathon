"use client"
import { House, Person, Settings, Task } from '@mui/icons-material'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavigatorComp() {
    let path = usePathname();
    console.log(path);
    return (
        <>
            {path == '/' ? <></> : path == '/login' ? <></> :
                <div className='fixed w-full    bottom-4 z-50'>

                    <div className='flex bg-[#FF8A00] text-white m-auto flex-row justify-around w-10/12 rounded-2xl items-center p-2 py-3 '>
                        <div onClick={() => { location.href = "/home" }}>
                            <House />
                        </div>
                        <div>
                            <Task />
                        </div>
                        <div>
                            <Person />
                        </div>
                        <div>
                            <Settings />
                        </div>

                    </div>

                </div>
            }
        </>

    )
}
