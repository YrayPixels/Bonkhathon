"use client"
import React from 'react'
import WalletContext from '../context/walletContext.js'
import CustomWalletButton from '../components/customWalletButton.js'


export default function Login() {
  return (
    <WalletContext>
         <div className='flex   justify-center'>
          Login   
        </div>
      <div  className='bg-from-pink-500 h-screen w-full flex flex-row justify-center items-center'>
           
      
        <CustomWalletButton/>
       
      </div>

        
    </WalletContext>
  )
}
