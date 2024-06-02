'use client'
import { CalendarMonth, Notifications } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

export default function ParentDashboard() {

    const [dates, setDates] = useState([]);
    useEffect(() => {
        function getDaysInMonth(year, month) {
            return new Date(year, month + 1, 0).getDate();
        }

        function generateDatesForCurrentMonth() {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth();
            const daysInMonth = getDaysInMonth(year, month);

            const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const datesArray = [];

            for (let day = 1; day <= daysInMonth; day++) {
                const currentDate = new Date(year, month, day);
                const dayOfWeek = daysOfWeek[currentDate.getDay()];
                datesArray.push({
                    day: dayOfWeek,
                    date: day.toString().padStart(2, '0'),
                    isToday: day === date.getDate()
                });
            }
            setDates(datesArray);
        }

        generateDatesForCurrentMonth();

    }, [])

    const containerRef = useRef(null);
    const todayRef = useRef(null);

    useEffect(() => {
        if (todayRef.current) {
            todayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [dates]);

    return (
        <div className='w-11/12 p-3 m-auto'>

            {/* dates */}
            <div ref={containerRef} className='flex flex-row gap-x-2 remove-scroll justify-start overflow-scroll py-5'>
                {dates.map((item, index) => {
                    return (
                        <div key={index}
                            ref={item.isToday ? todayRef : null}
                            className={`rounded-2xl shadow ${item.isToday ? "bg-[#ff8a00] text-white" : ""} hover:bg-[#FF8A00] hover:text-white p-2`}>
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
