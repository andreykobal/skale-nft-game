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
    }
  },
  //* Keep name as 'etherscan' to avoid errors.
  etherscan: {
    url: 'https://polygonscan.com/',
    apiKey: polyScan
  }
};
