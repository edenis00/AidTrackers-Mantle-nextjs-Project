import React, { useMemo, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog"
import { ConnectionType } from '@/lib/wallet/supported-connectors'
import { useWeb3React } from '@web3-react/core'
import WalletOption from '../WalletOptions'
import { SUPPORTED_WALLETS } from '@/lib/services/supported-wallets'
import Link from 'next/link'
import Image from 'next/image'
import { METAMASK_URL } from '@/lib/services/chain-config'




const NotConnectedWalletButton = () => {
  const [open, setOpen] = useState(false);
  const { isActive } = useWeb3React()
  const connectionType =
    typeof window !== 'undefined'
      ? (window?.localStorage?.getItem(
        'ConnectionType'
      ) as keyof typeof ConnectionType)
      : null;
  const isNoOptionActive = !isActive || (isActive && connectionType === null);

  

  const walletOptions = useMemo(() => {
    return Object.keys(ConnectionType).map((walletKey, index) => {
      const wallet = walletKey as keyof typeof ConnectionType;

      if (typeof window !== 'undefined' && SUPPORTED_WALLETS[wallet]) {
        if (
          SUPPORTED_WALLETS[wallet].name === 'MetaMask' &&
          !window?.ethereum?.isMetaMask
        ) {
          return (
            <InstallMetamaskButton
              key={index}
              walletName={SUPPORTED_WALLETS[wallet].name}
              iconName={SUPPORTED_WALLETS[wallet].iconName}
            />
          );
        }

        return (
          <WalletOption
            key={index}
            walletName={SUPPORTED_WALLETS[wallet].name}
            iconName={SUPPORTED_WALLETS[wallet].iconName}
            connectionType={ConnectionType[wallet]}
            isEnabled={
              isNoOptionActive || connectionType === ConnectionType[wallet]
            }
            setOpen={setOpen}
          />
        );
      }

      return null;
    });
  }, [connectionType, isNoOptionActive]);


  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <button className="btn spray px-6 py-3">Connect Wallet</button>
        </DialogTrigger>

        <DialogContent className="max-w-sm w-full gradient-bg text-white border-0">
          <DialogHeader>
            <DialogTitle>Connect wallet</DialogTitle>
            <DialogDescription>Click any of the below icons to connect your wallet to the app.</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">{walletOptions}</div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NotConnectedWalletButton







const InstallMetamaskButton = ({
  walletName,
  iconName,
}: {
  walletName: string;
  iconName: string;
}) => {
  return (
    <Link
      href={METAMASK_URL}
      target="_blank"
      className="btn w-full items-center flex justify-start gap-x-2 spray py-2"
    >
      <div className="px-2">
        <Image
          src={`/img/${iconName}`}
          alt={walletName}
          width={50}
          height={50}
          className=""
        />
      </div>

      <div className="">
        <div className="text-xs">{walletName} was not found</div>
        <div className="text-left font-medium text-lg"> Install Metamask </div>
      </div>
    </Link>
  );
};