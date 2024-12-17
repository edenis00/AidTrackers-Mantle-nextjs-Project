import { ChainId } from '@swapsicledex/swapsicle-sdk'
import RPC from '@/lib/rpc-list'


export const defaultChainId = ChainId.TELOS
export const INPUT_CHAIN_URL = RPC[ChainId.TELOS][0]

export const CHAIN_TO_URL_MAP = {
  [ChainId.TELOS]: RPC[ChainId.TELOS][0],
}

type ChainInfo = {
  explorer: string
  label: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: 18
  }
  rpcUrl: string
}

export const CHAIN_INFO: { [key: string]: ChainInfo } = {
  [ChainId.TELOS]: {
    explorer: 'https://teloscan.io',
    label: 'Telos',
    nativeCurrency: { name: 'Telos', symbol: 'TLOS', decimals: 18 },
    rpcUrl: RPC[ChainId.TELOS][0],
  },
  [ChainId.BSC]: {
    explorer: "https://bscscan.com",
    label: "Binance Smart Chain",
    nativeCurrency: { name: "Binance Coin", symbol: "BNB", decimals: 18 },
    rpcUrl: RPC[ChainId.BSC][0],
  },
  [ChainId.ARBITRUM]: {
    explorer: "https://arbiscan.io",
    label: "Arbitrum",
    nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
    rpcUrl: RPC[ChainId.ARBITRUM][0],
  },
  [ChainId.ARBITRUM_TESTNET]: {
    explorer: "https://testnet.arbiscan.io",
    label: "Arbitrum Testnet",
    nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
    rpcUrl: RPC[ChainId.ARBITRUM_TESTNET][0],
  },
  [ChainId.AVALANCHE]: {
    explorer: "https://cchain.explorer.avax.network",
    label: "Avalanche",
    nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
    rpcUrl: RPC[ChainId.AVALANCHE][0],
  },
  [ChainId.AVALANCHE_TESTNET]: {
    explorer: "https://cchain.explorer.avax-test.network",
    label: "Avalanche Testnet",
    nativeCurrency: { name: "Avalanche", symbol: "AVAX", decimals: 18 },
    rpcUrl: RPC[ChainId.AVALANCHE_TESTNET][0],
  },
  [ChainId.BSC_TESTNET]: {
    explorer: "https://testnet.bscscan.com",
    label: "Binance Smart Chain Testnet",
    nativeCurrency: { name: "Binance Coin", symbol: "BNB", decimals: 18 },
    rpcUrl: RPC[ChainId.BSC_TESTNET][0],
  },
  [ChainId.CELO]: {
    explorer: "https://explorer.celo.org",
    label: "Celo",
    nativeCurrency: { name: "Celo Dollar", symbol: "cUSD", decimals: 18 },
    rpcUrl: RPC[ChainId.CELO][0],
  },
  [ChainId.ETHEREUM]: {
    explorer: "https://etherscan.io",
    label: "Ethereum",
    nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
    rpcUrl: RPC[ChainId.ETHEREUM][0],
  },
  [ChainId.FANTOM]: {
    explorer: "https://ftmscan.com",
    label: "Fantom",
    nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
    rpcUrl: RPC[ChainId.FANTOM][0],
  },
  [ChainId.FANTOM_TESTNET]: {
    explorer: "https://testnet.ftmscan.com",
    label: "Fantom Testnet",
    nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
    rpcUrl: RPC[ChainId.FANTOM_TESTNET][0],
  },
  [ChainId.FUSE]: {
    explorer: "https://explorer.fuse.io",
    label: "Fuse",
    nativeCurrency: { name: "Fuse", symbol: "FUSE", decimals: 18 },
    rpcUrl: RPC[ChainId.FUSE][0],
  },
  [ChainId.HARMONY]: {
    explorer: "https://explorer.harmony.one",
    label: "Harmony",
    nativeCurrency: { name: "Harmony One", symbol: "ONE", decimals: 18 },
    rpcUrl: RPC[ChainId.HARMONY][0],
  },
  [ChainId.HARMONY_TESTNET]: {
    explorer: "https://explorer.pops.one",
    label: "Harmony Testnet",
    nativeCurrency: { name: "Harmony One", symbol: "ONE", decimals: 18 },
    rpcUrl: RPC[ChainId.HARMONY_TESTNET][0],
  },
  [ChainId.HECO]: {
    explorer: "https://hecoinfo.com",
    label: "Huobi ECO Chain",
    nativeCurrency: { name: "Huobi Token", symbol: "HT", decimals: 18 },
    rpcUrl: RPC[ChainId.HECO][0],
  },
  [ChainId.HECO_TESTNET]: {
    explorer: "https://testnet.hecoinfo.com",
    label: "Huobi ECO Chain Testnet",
    nativeCurrency: { name: "Huobi Token", symbol: "HT", decimals: 18 },
    rpcUrl: RPC[ChainId.HECO_TESTNET][0],
  },
  [ChainId.MANTLE]: {
    explorer: "https://explorer.mantle.xyz/",
    label: "Mantle",
    nativeCurrency: { name: "Mantle Token", symbol: "MNT", decimals: 18 },
    rpcUrl: RPC[ChainId.MANTLE][0],
  },
  [ChainId.MANTLE_TESTNET]: {
    explorer: "N/A",
    label: "Mantle Testnet",
    nativeCurrency: { name: "Mantle Token", symbol: "MNT", decimals: 18 },
    rpcUrl: RPC[ChainId.MANTLE_TESTNET][0],
  },
  [ChainId.MATIC]: {
    explorer: "https://polygonscan.com",
    label: "Polygon",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    rpcUrl: RPC[ChainId.MATIC][0],
  },
  [ChainId.MATIC_TESTNET]: {
    explorer: "https://mumbai.polygonscan.com",
    label: "Mumbai",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    rpcUrl: RPC[ChainId.MATIC_TESTNET][0],
  },
  [ChainId.MOONBEAM]: {
    explorer: "https://moonscan.io",
    label: "Moonbeam",
    nativeCurrency: { name: "Glimmer", symbol: "GLMR", decimals: 18 },
    rpcUrl: RPC[ChainId.MOONBEAM][0],
  },
  [ChainId.MOONBEAM_TESTNET]: {
    explorer: "https://moonbase.moonscan.io",
    label: "Moonbeam Testnet",
    nativeCurrency: { name: "Dev Glimmer", symbol: "DGLMR", decimals: 18 },
    rpcUrl: RPC[ChainId.MOONBEAM_TESTNET][0],
  },
  [ChainId.MOONRIVER]: {
    explorer: "https://moonriver.moonscan.io",
    label: "Moonriver",
    nativeCurrency: { name: "Moonriver", symbol: "MOVR", decimals: 18 },
    rpcUrl: RPC[ChainId.MOONRIVER][0],
  },
  [ChainId.OKEX]: {
    explorer: "https://www.oklink.com/okexchain",
    label: "OKExChain",
    nativeCurrency: { name: "OKExChain Token", symbol: "OKT", decimals: 18 },
    rpcUrl: RPC[ChainId.OKEX][0],
  },
  [ChainId.OKEX_TESTNET]: {
    explorer: "https://www.oklink.com/okexchain-test",
    label: "OKExChain Testnet",
    nativeCurrency: { name: "OKExChain Testnet Token", symbol: "OKT", decimals: 18 },
    rpcUrl: RPC[ChainId.OKEX_TESTNET][0],
  },
  [ChainId.OPTIMISM]: {
    explorer: "https://optimistic.etherscan.io",
    label: "Optimism",
    nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
    rpcUrl: RPC[ChainId.OPTIMISM][0],
  },
  [ChainId.PALM]: {
    explorer: "https://explorer.palm.io",
    label: "Palm",
    nativeCurrency: { name: "Palm", symbol: "PALM", decimals: 18 },
    rpcUrl: RPC[ChainId.PALM][0],
  },
  [ChainId.PALM_TESTNET]: {
    explorer: "https://explorer.palm-uat.xyz",
    label: "Palm Testnet",
    nativeCurrency: { name: "Palm", symbol: "PALM", decimals: 18 },
    rpcUrl: RPC[ChainId.PALM_TESTNET][0],
  },
  [ChainId.TELOS_TESTNET]: {
    explorer: "https://testnet.teloscan.io",
    label: "Telos Testnet",
    nativeCurrency: { name: "Telos", symbol: "TLOS", decimals: 18 },
    rpcUrl: RPC[ChainId.TELOS_TESTNET][0],
  },
  [ChainId.XDAI]: {
    explorer: "https://blockscout.com/xdai/mainnet",
    label: "xDai",
    nativeCurrency: { name: "xDai", symbol: "xDai", decimals: 18 },
    rpcUrl: RPC[ChainId.XDAI][0],
  },
}

// URLs
export const METAMASK_URL = 'https://metamask.io/download/'