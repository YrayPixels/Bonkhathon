"use client"
import { House, Person, Settings, Task } from '@mui/icons-material'
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavigatorComp() {
    let path = usePathname();
    const [active, setActive] = React.useState("home")
    return (
        <>
            {path == '/' ? <></> : path == '/login' ? <></> :
                <div className='fixed w-full   bottom-4 z-40'>

                    <div className='flex bg-[#FF8A00] text-white m-auto flex-row justify-around w-11/12 rounded-2xl items-center p-2 py-3 '>
                        <div className={`${path == '/home' && "bg-white p-1 flex items-center flex-col justify-center rounded-xl"}`} onClick={() => { location.href = "/home" }}>
                            <Image src="/nav/home.png" width={35} alt="" height={35} />
                            <p className='text-xs text-black'>Home</p>

                        </div>
                        <div className={`${path == '/create-task' && "bg-white p-1 flex flex-col justify-center items-center rounded-xl"}`} onMouseEnter={() => setActive("parent")} onClick={() => { location.href = "/create-task" }}>
                            <Image src="/nav/parent.png" width={35} alt="" height={35} />
                            <p className='text-xs text-black'>Create Quest</p>


                        </div>
                        <div onMouseEnter={() => setActive("child")}>
                            <Image src="/nav/child.png" width={35} alt="" height={35} />

                        </div>
                        <div onMouseEnter={() => setActive("home")}>
                            <Image src="/nav/profile.png" width={35} alt="" height={35} />

                        </div>

                    </div>

                </div>
            }
        </>

    )
}
