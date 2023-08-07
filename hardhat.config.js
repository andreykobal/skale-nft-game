require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

const privateKey = process.env.MNEMONIC
const maticUrl = process.env.MATIC_APP_ID
const polyScan = process.env.POLYGONSCAN
module.exports = {
  solidity: "0.8.0",
  networks: {
    matic: {
      chainId: 137,
      url: `https://rpc-mainnet.maticvigil.com/v1/${maticUrl}`,
      accounts: [privateKey]
    },
    mantle: {
      chainId: 5001,
      url: `https://rpc.testnet.mantle.xyz/`,
      accounts: [privateKey]
    },
    skaleTestnet: {
      chainId: 1351057110,
      url: `https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix      `,
      accounts: [privateKey]
    },
      mymetaverse: {
      chainId: 1687098052079624,
      url: `https://mymetaverse-1687098052079624-1.jsonrpc.sp1.sagarpc.io/`,
      accounts: [privateKey]
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      accounts: [privateKey],
    },
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts: [privateKey],
    },
    testnetbsc: {
      chainId: 97,
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      accounts: [privateKey],
    },
    auroraTestnet: {
      chainId: 1313161555,
      url: "https://testnet.aurora.dev",
      accounts: [privateKey],
    },
    meterTestnet: {
      chainId: 83,
      url: "https://rpctest.meter.io/",
      accounts: [privateKey],
    },
    xinfin: {
      url: process.env.XINFIN_NETWORK_URL,
      accounts: [privateKey],
    },
     apothem: {
      url: process.env.APOTHEM_NETWORK_URL,
      accounts: [privateKey]
    },
    goerli: {
      url: "https://goerli.infura.io/v3/076e36dcd6c6468da918dd54435a94f9",
      accounts: [privateKey]   
    },
    ailand: {
      url: "https://op.ailand.app",
      accounts: [privateKey]
    }

  },
  //* Keep name as 'etherscan' to avoid errors.
  etherscan: {
    url: 'https://polygonscan.com/',
    apiKey: polyScan,
  }
};
