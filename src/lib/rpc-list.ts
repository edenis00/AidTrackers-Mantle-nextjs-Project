import { ChainId } from "@swapsicledex/swapsicle-sdk"

const RPC = {
  [ChainId.TELOS]: [
    'https://rpc3.us.telos.net/evm',
    'https://api.kainosbp.com/evm',
    'https://mainnet.telos.net/evm',
    'https://mainnet15.telos.net/evm',
    'https://evm.telos.detroitledger',
    'https://mainnet-us.telos.net/evm',
    'https://mainnet-eu.telos.net/evm',
    'https://mainnet-asia.telos.net/evm',
    'https://1rpc.io/telos/evm',
    'https://telos.drpc.org',
    'wss://telos.drpc.org',
    'https://evm.telos.detroitledger.tech/evm',
    'https://evm.telos.detroitledge',
    'https://40.rpc.thirdweb.com'
  ],
  [ChainId.BSC]: [
    "https://bsc-dataseed.binance.org/",
  ],
  [ChainId.ARBITRUM]: [
    "https://arb1.arbitrum.io/rpc",
  ],
  [ChainId.ARBITRUM_TESTNET]: [
    "https://rinkeby.arbitrum.io/rpc",
  ],
  [ChainId.AVALANCHE]: [
    "https://api.avax.network/ext/bc/C/rpc",
  ],
  [ChainId.AVALANCHE_TESTNET]: [
    "https://api.avax-test.network/ext/bc/C/rpc",
  ],
  [ChainId.BSC_TESTNET]: [
    "https://data-seed-prebsc-1-s1.binance.org:8545/",
  ],
  [ChainId.CELO]: [
    "https://forno.celo.org",
  ],
  [ChainId.ETHEREUM]: [
    "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
  ],
  [ChainId.FANTOM]: [
    "https://rpcapi.fantom.network",
  ],
  [ChainId.FANTOM_TESTNET]: [
    "https://rpc.testnet.fantom.network",
  ],
  [ChainId.FUSE]: [
    "https://rpc.fuse.io",
  ],
  [ChainId.HARMONY]: [
    "https://api.harmony.one",
  ],
  [ChainId.HARMONY_TESTNET]: [
    "https://api.s0.b.hmny.io",
  ],
  [ChainId.HECO]: [
    "https://http-mainnet.hecochain.com",
  ],
  [ChainId.HECO_TESTNET]: [
    "https://http-testnet.hecochain.com",
  ],
  [ChainId.MANTLE]: [
    "https://mantlenet.com/rpc",
  ],
  [ChainId.MANTLE_TESTNET]: [
    "https://testnet.mantlenet.com/rpc",
  ],
  [ChainId.MATIC]: [
    "https://rpc-mainnet.matic.network",
  ],
  [ChainId.MATIC_TESTNET]: [
    "https://rpc-mumbai.matic.today",
  ],
  [ChainId.MOONBEAM]: [
    "https://rpc.api.moonbeam.network",
  ],
  [ChainId.MOONBEAM_TESTNET]: [
    "https://rpc.testnet.moonbeam.network",
  ],
  [ChainId.MOONRIVER]: [
    "https://rpc.moonriver.moonbeam.network",
  ],
  [ChainId.OKEX]: [
    "https://exchainrpc.okex.org",
  ],
  [ChainId.OKEX_TESTNET]: [
    "https://exchaintestrpc.okex.org",
  ],
  [ChainId.OPTIMISM]: [
    "https://mainnet.optimism.io",
  ],
  [ChainId.PALM]: [
    "https://palm-mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
  ],
  [ChainId.PALM_TESTNET]: [
    "https://palm-testnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
  ],
  [ChainId.TELOS_TESTNET]: [
    "https://testnet.telos.net/evm",
  ],
  [ChainId.XDAI]: [
    "https://rpc.xdaichain.com",
  ],
}

export default RPC