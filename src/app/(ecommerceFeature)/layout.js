"use client"
import React from 'react'
import ShopContextProvider from '../context/ecommerceContext'

export default function layout({children}) {
  return (
    <div>
    <ShopContextProvider>{children}</ShopContextProvider>
    </div>
  )
}
