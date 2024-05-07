// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through node <script>.
//
// You can also run a script with npx hardhat run <script>. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// deploy.js
import pkg from 'hardhat';
const { ethers } = pkg;

async function deployContracts() {
  const Tracking = await ethers.getContractFactory("Tracking");
  const tracking = await Tracking.deploy();
  await tracking.deployed();
  console.log("Tracking Contract Address:", tracking.address);
  
}
deployContracts().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
