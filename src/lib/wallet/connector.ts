import { AddEthereumChainParameter, Connector } from '@web3-react/types'
import { ConnectionType, PRIORITIZED_CONNECTORS } from '@/lib/wallet/supported-connectors'
import { CHAIN_INFO } from '@/lib/services/chain-config'

export function getConnection(c: Connector | ConnectionType) {
  if (c instanceof Connector) {
    const connection = Object.values(PRIORITIZED_CONNECTORS).find((connection) => connection.connector === c)
    if (!connection) throw Error('Unsupported Connector')
    
    return connection
  } else {
    switch (c) {
      case ConnectionType.METAMASK:
        return PRIORITIZED_CONNECTORS[ConnectionType.METAMASK]
      case ConnectionType.COINBASE:
        return PRIORITIZED_CONNECTORS[ConnectionType.COINBASE]
      case ConnectionType.WALLET_CONNECT:
        return PRIORITIZED_CONNECTORS[ConnectionType.WALLET_CONNECT]
      case ConnectionType.NETWORK:
        return PRIORITIZED_CONNECTORS[ConnectionType.NETWORK]
    }
  }
}

export const switchNetwork = async (chainId: number, connectionType: ConnectionType | null) => {
  if (!connectionType) return

  const { connector } = getConnection(connectionType)

  if (connectionType === ConnectionType.WALLET_CONNECT || connectionType === ConnectionType.NETWORK) {
    await connector.activate(chainId)
    return
  }

  const chainInfo = CHAIN_INFO[chainId]
  const addChainParameter: AddEthereumChainParameter = {
    chainId,
    chainName: chainInfo.label,
    rpcUrls: [chainInfo.rpcUrl],
    nativeCurrency: chainInfo.nativeCurrency,
    blockExplorerUrls: [chainInfo.explorer],
  }
  await connector.activate(addChainParameter)
}