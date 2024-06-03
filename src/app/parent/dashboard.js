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


    const [activeTab, setActiveTab] = useState('pending')
    return (
        <div className='w-full px-4 m-auto'>

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

            <div className="h-[164px] bg-cover  bg-[url('/main.png')] rounded-2xl p-4 mb-4 space-y-4">
                <div className='flex flex-row justify-between items-start'>
                    <div>
                        <h2 className='font-bold text-white text-[20px]'>Quests Assigned</h2>
                        <p className='text-white text-center text-[24px]  font-bold'>0</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-white text-[20px]'>Quests Assigned</h2>
                        <p className='text-white text-center text-[24px] font-bold'>0</p>
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <button onClick={() => { location.href = "/create-task" }} className='p-2 hover: font-bold rounded-2xl shadow bg-white'>
                        Create Quests
                    </button>
                </div>

            </div>
            <div>


            </div>

            <div className='space-y-3' >
                <div className='flex flex-row justify-around items-center bg-grey-100 p-2'>
                    <h2 onClick={() => setActiveTab('pending')} className={`font-bold text-[14px] ${activeTab == 'pending' && "p-1 rounded-lg bg-[#FF8A00] text-white"}`}>Pending Quest</h2>
                    <h2 onClick={() => setActiveTab('unassigned')} className={`font-bold text-[14px] ${activeTab == 'unassigned' && "p-1 rounded-lg bg-[#FF8A00] text-white"}`}>Unassigned Quest</h2>
                    <h2 onClick={() => setActiveTab('completed')} className={`font-bold text-[14px] ${activeTab == 'completed' && "p-1 rounded-lg bg-[#FF8A00] text-white"}`}>Completed Quest</h2>

                </div>

                <div className='space-y-3 h-[400px] overflow-scroll remove-scroll'>
                    {dates.map((item, index) => {
                        return (
                            <div
                                onClick={() => { location.href = `/tasks?id=${index}` }}
                                key={index} className='rounded-2xl shadow bg-white border p-3'>
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
