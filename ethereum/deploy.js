const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledContracts = require('./build/DeployContracts.json');

const provider = new HDWalletProvider(
  'movie half enemy armed moon admit raccoon draw note bus tenant kidney',
  'https://goerli.infura.io/v3/971963f926b24a8fb186c630988c7946'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    compiledContracts.abi
  )
    .deploy({ data: compiledContracts.evm.bytecode.object })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
