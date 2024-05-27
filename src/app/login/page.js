"use client"
import React, { useEffect, useRef, useState } from "react";
import WalletContextUser from "../context/walletContext.js";
import WalletComp from "../components/customWalletButton.js"

export default function PresaleComp() {
  return (
    <WalletContextUser>
      <WalletComp />
    </WalletContextUser>
  )
}
