"use client"
import React, { useEffect, useRef, useState } from "react";
import WalletContextUser from "../context/walletContext.js";
import WalletComp from "../components/customWalletButton.js"

export default function LoginComp() {
  return (
    <WalletContextUser>
      <WalletComp />
    </WalletContextUser>
  )
}
