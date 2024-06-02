"use client"
import { House, Notifications, Person, Settings, Task } from '@mui/icons-material'
import { Avatar } from '@mui/material';
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HeaderComp() {
    let path = usePathname();
    return (
        <>
            {path == '/' ? <></> : path == '/login' ? <></> :
                <div>
                    <div className='px-4 pt-4 m-auto'>

                        <div className='flex flex-row pt-2 justify-between items-center'>

                            <div className='flex flex-row justify-between items-center gap-x-2'>
                                <Avatar />
                                <h1 className='font-bold'>Hi, User</h1>
                            </div>
                            <div>
                                <Notifications className='text-[#FF8A00]' />
                            </div>
                        </div>


                    </div>
                </div>
            }
        </>



    )
}
