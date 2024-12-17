import { Web3ReactHooks, initializeConnector } from '@web3-react/core'
import { Connector } from '@web3-react/types'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { CHAIN_TO_URL_MAP, defaultChainId } from '@/lib/services/chain-config'
import { WalletConnect } from "@web3-react/walletconnect-v2";
import { CoinbaseWallet } from '@web3-react/coinbase-wallet'

export interface Connection {
  connector: Connector
  hooks: Web3ReactHooks
  type: ConnectionType
}

export enum ConnectionType {
  WALLET_CONNECT = 'WALLET_CONNECT',
  METAMASK = 'METAMASK',
  COINBASE = 'COINBASE',
  NETWORK = 'NETWORK',
}

// METAMASK
const buildInjectedConnector = () => {
  const [web3MetamaskWallet, web3MetamaskWalletHooks] = initializeConnector<MetaMask>(
    (actions) => new MetaMask({ actions, onError: onConnectionError })
  )

  const injectedConnection: Connection = {
    connector: web3MetamaskWallet,
    hooks: web3MetamaskWalletHooks,
    type: ConnectionType.METAMASK,
  }

  return injectedConnection;
}

// WALLET CONNECT
const buildWalletConnectConnector = () => {
  const [web3WalletConnect, web3WalletConnectHooks] =
    initializeConnector<WalletConnect>(
      (actions) =>
        new WalletConnect({
          actions,
          options: {
            projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
            rpcMap: CHAIN_TO_URL_MAP,
            chains: [40],
            showQrModal: true,
            metadata: {
              name: 'wallet-connection-example',
              description: 'Example app for demostrating wallet connection using web3-react',
              url: process.env.NEXT_PUBLIC_SITE_URL || "",
              icons: ['https://avatars.githubusercontent.com/u/37784886']
            },
          },
          onError: onConnectionError,
        })
    );

  const walletConnectConnection: Connection = {
    connector: web3WalletConnect,
    hooks: web3WalletConnectHooks,
    type: ConnectionType.WALLET_CONNECT,
  };

  return walletConnectConnection;
};

// COINBASE
export const [coinbaseWallet, hooks] = initializeConnector<CoinbaseWallet>(
  (actions) =>
    new CoinbaseWallet({
      actions,
      options: {
        url: '',
        appName: 'web3-react',
      },
    })
)

const buildNetworkConnector = () => {
  const [web3Network, web3NetworkHooks] = initializeConnector<Network>(
    (actions) =>
      new Network({
        actions,
        urlMap: CHAIN_TO_URL_MAP,
        defaultChainId: defaultChainId,
      })
  )
  const networkConnection: Connection = {
    connector: web3Network,
    hooks: web3NetworkHooks,
    type: ConnectionType.NETWORK,
  }

  return networkConnection
}

const onConnectionError = (error: Error) => {
  console.log(`web3-react error: ${error}`)
}

export const PRIORITIZED_CONNECTORS: { [key in ConnectionType]: Connection } = {
  [ConnectionType.METAMASK]: buildInjectedConnector(),
  [ConnectionType.COINBASE]: buildWalletConnectConnector(),
  [ConnectionType.WALLET_CONNECT]: buildWalletConnectConnector(),
  [ConnectionType.NETWORK]: buildNetworkConnector(),
}