"use client"
import React, { useEffect } from 'react'
import Dashboard from '../components/homepage'
import WalletContextUser from '../context/walletContext'

export default function HomePage() {
  return (
    <WalletContextUser>
      <Dashboard />
    </WalletContextUser>
  )
}
