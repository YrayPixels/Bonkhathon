"use client"
import React, { useEffect } from 'react'
import WalletContext from '../context/walletContext.js'
import CustomWalletButton from '../components/customButtonComp.js'
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';


export default function Login() {

  const { buttonState, onConnect, onDisconnect, publicKey, walletIcon, walletName } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });

  useEffect(() => {
    if (publicKey) {
      location.href = '/home'
    }
  }, [onConnect, publicKey])
  return (
    <WalletContext>
      <div className="bg-[url('/images/bg.png')] h-screen w-full flex flex-row justify-center items-center">
        <CustomWalletButton sx={{ backgroundColor: 'red' }} />
      </div>
    </WalletContext>
  )
}
