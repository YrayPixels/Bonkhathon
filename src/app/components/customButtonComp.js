import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter,  PhantomWalletName} from '@solana/wallet-adapter-wallets';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'


export default function CustomWalletButton() {

  const { wallet, connect, select, disconnect, connected, publicKey } = useWallet();

  const handleConnect = async () => {
    try {
      select(PhantomWalletName);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };


  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <>
    
      <WalletMultiButton/>

    </>
  )
}
