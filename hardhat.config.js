// require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "mcpnet",
  networks: {
    hardhat: {
    },
    mcpnet: {
      url: "https://beta-rpc.mainnet.computecoin.com/",
      accounts: ['59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d']
    }
  },
  solidity: {
    version: "0.5.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/artifacts"
  },
  mocha: {
    timeout: 40000
  }
}