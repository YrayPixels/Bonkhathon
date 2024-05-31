'use client'
import { CalendarMonth, Notifications } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

export default function ParentDashboard() {

    let dates = [
        {
            day: "Mon",
            date: "12",
        },
        {
            day: "Tue",
            date: "13",
        },
        {
            day: "Wed",
            date: "14",
        },
        {
            day: "Thu",
            date: "15",
        },
        {
            day: "Fri",
            date: "16",
        },
        {
            day: "Sat",
            date: "17",
        },
        {
            day: "Sun",
            date: "18",
        },
    ]

    let dashboard = [

    ]
    return (
        <div className='w-11/12 p-3 m-auto'>

            <div className='flex flex-row pt-6 justify-between items-center'>

                <div className='flex flex-row justify-between items-center gap-x-2'>
                    <Avatar />
                    <h1>Hi, User</h1>
                </div>
                <div>
                    <Notifications className='text-[#FF8A00]' />
                </div>
            </div>
            {/* dates */}
            <div className='flex flex-row gap-x-2 remove-scroll justify-start overflow-scroll py-5'>
                {dates.map((item, index) => {
                    return (
                        <div key={index} className='rounded-2xl shadow hover:bg-[#FF8A00] hover:text-white p-2'>
                            <div className='border-b text-center'>{item.day}</div>

                            <div className='text-[28px] text-center font-bold'> {item.date}</div>
                        </div>
                    )
                })}
            </div>
            <div>


            </div>

            <div className='space-y-3' >
                <h2 className='font-bold text-[30px] flex flex-row gap-x-4 items-start'>Ongoing Task <span className='bg-[#FF8A00] text-white text-[12px] p-1 rounded-lg '>22</span></h2>

                <div className='space-y-3 h-[400px] overflow-scroll remove-scroll'>
                    {dates.map((item, index) => {
                        return (
                            <div key={index} className='rounded-2xl shadow bg-[#FF8A00]/10 p-3'>
                                <div className='font-bold text-[16px]'>House Cleaning</div>

                                <p className='text-[14px] border-b border-black/50 pb-3'>
                                    Tidying Up the Bedroom,Dusting,Vacuuming,Sweeping and Mopping,Cleaning Windows
                                </p>
                                <p className='text-[12px] flex items-center gap-x-3 '><CalendarMonth className="text-[13px]" />  Due in 2 days</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}