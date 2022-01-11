//https://eth-ropsten.alchemyapi.io/v2/3nta1xUN56ICHfSHABiARawEDrdfex0I

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/3nta1xUN56ICHfSHABiARawEDrdfex0I",
      accounts: [
        "edce80b0ce28443e64be3060b1a0115a12fbd13748878a73f1e7060346b5a439",
      ],
    },
  },
};
