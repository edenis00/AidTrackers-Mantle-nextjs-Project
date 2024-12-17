import { Button } from '@/components/button'
import useConnectToWallet from '@/hooks/useConnectToWallet'
import { ConnectionType } from '@/lib/wallet/supported-connectors'
import Image from 'next/image'
import React, { FC } from 'react'

interface OptionsParam {
  walletName: string
  iconName: string
  connectionType: ConnectionType
  isEnabled: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const WalletOption: FC<OptionsParam> = ({ walletName, iconName, connectionType, isEnabled, setOpen }) => {
  const connectWallet = useConnectToWallet(connectionType, setOpen)

  return (
    <Button className="btn spray-dark w-full flex justify-start items-center gap-x-2" size="auto"
      onClick={connectWallet}
    >
      <div className="px-2">
        <Image
          src={`/img/${iconName}`}
          height={50}
          width={50}
          alt={`${walletName} logo`}
          className=""
        />
      </div>

      <div className="text-base"> {walletName} </div>
    </Button>
  )
}

export default WalletOption