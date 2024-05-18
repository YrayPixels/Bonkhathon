import React from 'react'
import WalletContext from '../context/walletContext.js'
import CustomWalletButton from '../components/customWalletButton.js'



export default function Login() {
  return (
    <WalletContext>
        Login
        <CustomWalletButton/>
    </WalletContext>
  )
}
