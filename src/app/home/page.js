"use client"
import React, { useEffect } from 'react'
import Dashboard from '../components/homepage'
import WalletContextUser from '../context/walletContext'
import { isLoggedIn } from '../login/utils'

export default function HomePage() {
  useEffect(() => {
    let response = isLoggedIn();
    if (response.status == false) {
      location.href = '/login'
    }
  }, [])
  return (
    <WalletContextUser>
      <Dashboard />
    </WalletContextUser>
  )
}
