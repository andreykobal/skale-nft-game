// scripts/getTokensOfOwner.js
const { ethers } = require("hardhat");

async function main() {
    const contractAddress = "0xC9740fB8Ea3aCbf646E2A83377c5743183902166";
    const walletAddress = "0x204f9781DDcafB4a844fd12250dB15183C67cACB";

    const GameItem = await ethers.getContractFactory("GameItem");
    const gameItem = GameItem.attach(contractAddress);

    const tokensOfOwner = await gameItem.getTokensOfOwner(walletAddress);
    const parsedTokens = JSON.parse(tokensOfOwner);

    console.log(`Raw output of getTokensOfOwner: ${tokensOfOwner}`);
    console.log(`Tokens owned by ${walletAddress}:`);
    parsedTokens.forEach((tokenURI, index) => {
        console.log(`Token ${index + 1}: ${tokenURI}`);
    });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
