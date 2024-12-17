'use client'
import { useWeb3React } from '@web3-react/core'
import React from 'react'
import NotConnectedWalletButton from './NotConnected'
import ConnectedWalletButton from './Connected'

const WalletButton = () => {
  const { account } = useWeb3React()
  return (
    !account ?
      <NotConnectedWalletButton />
    :
      <ConnectedWalletButton />
  )
}

export default WalletButton