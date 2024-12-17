"use client";

import { ReactNode, useEffect } from 'react'
import { getConnection } from "@/lib/wallet/connector";
import { ConnectionType, PRIORITIZED_CONNECTORS } from "@/lib/wallet/supported-connectors";
import { Web3ReactProvider } from '@web3-react/core'
import { Connector } from '@web3-react/types'

async function connect(connector: Connector) {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly()
    }
  } catch (error) {
  }
}

const connectEagerly = async () => {
  const connectionType = (window?.localStorage?.getItem("ConnectionType")) as keyof typeof ConnectionType
  
  if (connectionType) {
    await connect(getConnection(ConnectionType[connectionType]).connector)
  }
}

export default function Web3ContextProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    connectEagerly()
  }, [])


  return (
    <Web3ReactProvider connectors={Object.values(PRIORITIZED_CONNECTORS).map(connector => [connector.connector, connector.hooks])}>
      {children}
    </Web3ReactProvider>
  );
}
