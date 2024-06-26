"use client"
import React, { useEffect, useRef, useState } from "react";
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';
import { FolderCopy } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { labels } from '../__utils__/utils'
import CustomInput from './customInput/customInput'
import { fetchChild, fetchUser } from '../login/utils'

export default function WalletComp() {
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
  const [onBoarding, setOnBoarding] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [subPrompt, setSubPrompt] = useState("");

  const ref = useRef(null);
  useEffect(() => {
    if (!publicKey) {
      setConnected(false);
    } else {
      setConnected(true);
      setWalletAddress(publicKey?.toBase58());
      // location.href = '/home';
    }

  }, [publicKey])

  useEffect(() => {
    if (onConnect) {
      onConnect();
    }
    if (buttonState == 'connected') {
      async function getUser() {
        let userType = window.localStorage.getItem('userType');
        if (userType == 'Parent') {
          // let user = await fetchUser(publicKey?.toBase58());
          // localStorage.setItem('user', JSON.stringify(user))
          location.href = '/home'
        } else {
          // let user = await fetchChild(publicKey?.toBase58());
          // localStorage.setItem('user', JSON.stringify(user))
          location.href = '/home'
        }
      }
      getUser();
    }

  }, [onConnect, buttonState])
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
    <div onClick={() => setVisible(false)} className="bg-fill bg-[url('/images/bg.png')] h-screen w-screen flex flex-row justify-center items-center">

      <div className="space-y-8 w-10/12">

        {buttonState == 'connected' && <p className="text-[14px] text-vivd-lime-green text-center ">
          {`${walletAddress.slice(0, 7)}....${walletAddress.slice(-3, walletAddress.length)}`} <span onClick={copyClip} className=''><FolderCopy /></span>
        </p>}
        {!onBoarding ?
          <div className="flex flex-row justify-center items-center">
            {visible &&
              <span style={{ position: 'absolute', zIndex: 9999999, left: '100px' }}>
                <ul
                  aria-label="dropdown-list"
                  className={`wallet-adapter-dropdown-list wallet-adapter-dropdown-list-active`}
                  ref={ref}
                  role="menu"
                >
                  {publicKey ? (
                    <li
                      className="wallet-adapter-dropdown-list-item"
                      onClick={async () => {
                        await navigator.clipboard.writeText(publicKey.toBase58());
                        setCopied(true);
                        setTimeout(() => setCopied(false), 400);
                      }}
                      role="menuitem"
                    >
                      {copied ? labels['copied'] : labels['copy-address']}
                    </li>
                  ) : null}
                  <li
                    className="wallet-adapter-dropdown-list-item"
                    onClick={() => {
                      setModalVisible(true);
                      setOpenSmall(false);
                    }}
                    role="menuitem"
                  >
                    {labels['change-wallet']}
                  </li>
                  {onDisconnect ? (
                    <li
                      className="wallet-adapter-dropdown-list-item"
                      onClick={() => {
                        onDisconnect();
                        setOpenSmall(false);
                      }}
                      role="menuitem"
                    >
                      {labels['disconnect']}
                    </li>
                  ) : null}
                </ul>
              </span>
            }
            <button onClick={startConnection} className="bg-[#FF8A00] mt-10  w-full px-6 py-2 shadow-sm rounded-xl text-white">
              {labels[buttonState]}
            </button>

          </div>
          :
          <div>
            <div className="mb-10 space-y-4"><h2 className="text-center font-bold text-[24px]">
              {onBoarding && prompt == "" ? "How do you want to use the app today?" : `${prompt}`}</h2>
              {subPrompt != "" && <p className="text-center">{subPrompt}</p>}
            </div>
            {prompt == "" && subPrompt == "" &&
              <div className="flex flex-row justify-center gap-4 items-center">
                <div onClick={() => {
                  localStorage.setItem('userType', 'Parent')
                  // location.href = '/home'
                  setOnBoarding(false)
                }} className="blobloader flex flex-row justify-center items-center font-bold text-white">
                  Parent
                </div>
                <div onClick={() => {
                  localStorage.setItem('userType', 'Child')
                  setOnBoarding(false)
                }} className="blobloader2 flex flex-row justify-center items-center font-bold text-white">
                  Child
                </div>
              </div>
            }

          </div>
        }

      </div>


    </div>
  )
}
