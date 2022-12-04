// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// string date, string time, string address, string id, string notary, 
//     string badge, string doc
const hre = require("hardhat");
async function main() {
  // We get the contract to deploy
  const Transaction = await hre.ethers.getContractFactory("MyContract");
  const contract = await Transaction.deploy();
  await contract.deployed();
  console.log("transation contract deployed to:", contract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });