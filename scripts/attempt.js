const hre = require("hardhat");

async function main() {
  const CONTRACT_ADDR = "0x4e0574b5419c0FfD994B8edf7F277b85F7D92D4D"
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);
  
  const addr = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"
  await contract.doAttempt(addr)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});