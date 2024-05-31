"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { FolderCopy, Wallet } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { labels } from '../__utils__/utils'
import DoersDashboard from "../doers/dashboard";
import ParentDashboard from "../parent/dashboard";


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
    const [userType, setUsetType] = useState('Child');
    useEffect(() => {
        if (window) {
            const user = localStorage.getItem('userType');
            if (user) {
                setUsetType(user);
            }
        }
    }, [])
    return (
        <div className="bg-fill h-screen bg-[url('/images/bg.png')] ">
            {userType == 'Child' ?
                <DoersDashboard /> :
                <ParentDashboard />
            }
        </div>
    )
}
