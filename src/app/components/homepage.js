"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { FolderCopy, Wallet } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { labels } from '../__utils__/utils'


export default function Dashboard() {
    const { connection } = useConnection();
    const [connected, setConnected] = useState(false)
    const [visible, setVisible] = useState(false)
    const [visibleMod, setVisibleMod] = useState(false)
    const [loading, setLoading] = useState(false)
    const [walletAddress, setWalletAddress] = useState('')

    // Wallet button
    const { setVisible: setModalVisible } = useWalletModal();

    const { buttonState, onConnect, onDisconnect, publicKey, walletIcon, walletName } = useWalletMultiButton({
        onSelectWallet() {
            setModalVisible(true);
        },
    });
    const [copied, setCopied] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        if (onConnect) {
            onConnect();
        }
        console.log(walletAddress);
    }, [onConnect])
    function startConnection() {
        setVisible(!visible);
        switch (buttonState) {
            case 'no-wallet':
                setModalVisible(true);
                break;
            case 'has-wallet':
                if (onConnect) {
                    onConnect();
                    setVisible(!visible);
                }
                break;
            case 'connected':
                if (onDisconnect) {
                    onDisconnect();
                }
                break;
        }
    }
    function copyClip() {
        navigator.clipboard.writeText(walletAddress);
    }

    return (
        // <div onClick={() => setVisible(false)} className="bg-fill bg-[url('/images/bg.png')] h-screen w-screen flex flex-row justify-center items-center">
        //     <div className="">

        //         {buttonState == 'connected' && <p className="text-[14px] text-vivd-lime-green text-center ">
        //             {`${walletAddress.slice(0, 7)}....${walletAddress.slice(-3, walletAddress.length)}`} <span onClick={copyClip} className=''><FolderCopy /></span>
        //         </p>}
        //         <div className="flex flex-row justify-center items-center">
        //             {visible &&
        //                 <span style={{ position: 'absolute', zIndex: 9999999, left: '100px' }}>
        //                     <ul
        //                         aria-label="dropdown-list"
        //                         className={`wallet-adapter-dropdown-list wallet-adapter-dropdown-list-active`}
        //                         ref={ref}
        //                         role="menu"
        //                     >
        //                         {publicKey ? (
        //                             <li
        //                                 className="wallet-adapter-dropdown-list-item"
        //                                 onClick={async () => {
        //                                     await navigator.clipboard.writeText(publicKey.toBase58());
        //                                     setCopied(true);
        //                                     setTimeout(() => setCopied(false), 400);
        //                                 }}
        //                                 role="menuitem"
        //                             >
        //                                 {copied ? labels['copied'] : labels['copy-address']}
        //                             </li>
        //                         ) : null}
        //                         <li
        //                             className="wallet-adapter-dropdown-list-item"
        //                             onClick={() => {
        //                                 setModalVisible(true);
        //                                 setOpenSmall(false);
        //                             }}
        //                             role="menuitem"
        //                         >
        //                             {labels['change-wallet']}
        //                         </li>
        //                         {onDisconnect ? (
        //                             <li
        //                                 className="wallet-adapter-dropdown-list-item"
        //                                 onClick={() => {
        //                                     onDisconnect();
        //                                     setOpenSmall(false);
        //                                 }}
        //                                 role="menuitem"
        //                             >
        //                                 {labels['disconnect']}
        //                             </li>
        //                         ) : null}
        //                     </ul>
        //                 </span>
        //             }

        //         </div>
        //     </div>
        // </div>

        <div className="bg-fill h-screen bg-[url('/images/bg.png')] ">

            <div className="w-10/12 m-auto py-10 space-y-4">

                <div className="flex flex-row justify-between items-center">
                    <div>
                        <p>Welcome</p>
                        <p>Moses Erhinyodavwe</p>
                    </div>
                    <button onClick={startConnection} className="rounded-xl text-white">
                        <Wallet sx={{ color: 'black' }} />
                    </button>
                </div>

                <div className="border rounded-2xl p-3 h-[200px] bg-red-400">
                    Tasks Assigned: 10
                </div>
            </div>
        </div>
    )
}
