"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'
import SlideButton from '../components/slidecomplete/slidecom'

export default function Tasks() {
    const params = useSearchParams();
    let id = params.get('id');
    return (
        <div className='w-11/12 py-4 m-auto'>

            <div>

                <h2>Task Title</h2>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.s

                </p>
            </div>
            <div>
                <SlideButton onComplete={() => console.log('completed')} />
            </div>

        </div>
    )
}
