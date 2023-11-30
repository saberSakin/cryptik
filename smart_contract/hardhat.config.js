require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/o4aqcVYuTeyBNdae8iv_eD7OQPIeCtRJ",
      accounts: [
        "0eb463b59e4bb8baa8e678af4b4f70b19992cffc669481be05341d323a10ec1e",
      ],
    },
  },
};
