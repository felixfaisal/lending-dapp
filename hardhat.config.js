/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-abi-exporter');


const { API_URL, PRIVATE_KEY, RINKERBY_API_URL } = process.env;

module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      rinkeby: {
         url: RINKERBY_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   abiExporter: {
      path: './data/abi',
      runOnCompile: true,
      clear: true,
      flat: true,
      only: [],
      spacing: 2,
      pretty: true,
   },
}
