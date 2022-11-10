
require("@nomiclabs/hardhat-waffle")
require("dotenv").config({path:'./.env.local'})


const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {

  solidity: "0.8.10",
  defaultNetwork:"goerli",
  networks: {

  hardhat:{},
  // polygon:{},
  goerli:{
    url:process.env.GOERLI_RPC_URL,
    accounts:[PRIVATE_KEY],
    chainId:5,
    

  }
  },
};
