const hre = require("hardhat");
const NUM_ITEMS = 1;

async function main() {
  const [signer] = await hre.ethers.getSigners();
  //console.log("Signer address:", signer.address);
  const signerBalance = await hre.ethers.provider.getBalance(signer.address);
  //console.log("Signer balance:", hre.ethers.utils.formatEther(signerBalance));

  const GameItem = await hre.ethers.getContractFactory("GameItem");
  //console.log(GameItem);

  const gameItem = await GameItem.attach("0xC9740fB8Ea3aCbf646E2A83377c5743183902166");

  for (var i = 1; i <= NUM_ITEMS; i++) {
    await gameItem.mintItem("https://bafkreigjdlompxctswi2gxcsb6eyutj7xint3wpqvtnyvv7f3ya7avj3hi.ipfs.nftstorage.link/");
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
