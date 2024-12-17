export interface WalletInfo {
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    name: 'Injected',
    iconName: 'injected.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true,
  },
  METAMASK: {
    name: 'MetaMask',
    iconName: 'metamask.svg',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  // COINBASE: {
  //   name: 'Coinbase',
  //   iconName: 'coinbase.svg',
  //   description: 'Connect to coinbase wallet',
  //   href: null,
  //   color: '#E8831D',
  // },
  WALLET_CONNECT: {
    name: 'WalletConnect',
    iconName: 'wallet_connect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true,
  },
}
