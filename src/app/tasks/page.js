"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function Tasks() {
    const params = useSearchParams();
    let id = params.get('id');
    return (
        <div>

        </div>
    )
}
