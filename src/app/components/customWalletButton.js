import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';


export default function CustomWalletButton() {

  const { wallet, connect, disconnect, connected, publicKey } = useWallet();

  const handleConnect = async () => {
    try {
      await connect(new PhantomWalletAdapter());
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };


  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <div>
      {connected ? (
        <>
          <p>Connected: {publicKey?.toBase58()}</p>
          <button onClick={handleDisconnect}>Disconnect</button>
        </>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </div>
  )
}
