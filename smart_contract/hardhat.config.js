// https://eth-goerli.alchemyapi.io/v2/oqgrdSb1bwsGbfEvzgjhKp2ZW0vju6sM

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/oqgrdSb1bwsGbfEvzgjhKp2ZW0vju6sM',
      accounts: ['28a8482dd3c27db8060e1afbeb73ac8a2735c8e7531feb989d677464cb81da42']
    }
  }
}