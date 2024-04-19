const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledContracts = require('../ethereum/build/DeployContracts.json');
const compiledInsurance = require('../ethereum/build/Insurance.json');
const compiledPurchase = require('../ethereum/build/EVPurchase.json')
const compiledBattery = require('../ethereum/build/BatteryMonitoring.json')

let accounts;
let contracts;
let insuranceAddress;
let purchaseAddress;
let batteryAddress;
let insurance;
let purchase;
let battery;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  contracts = await new web3.eth.Contract(compiledContracts.abi)
    .deploy({ data: compiledContracts.evm.bytecode.object })
    .send({ from: accounts[0], gas: '2000000' });

  await contracts.methods.deployInsurance().send({
    from: accounts[0],
    gas: '2000000'
  });

  await contracts.methods.deployBattery().send({
    from: accounts[0],
    gas: '2000000'
  });

  [insuranceAddress] = await contracts.methods.getDeployedInsurances().call();
  insurance = await new web3.eth.Contract(
    compiledInsurance.abi,
    insuranceAddress
  );

  [batteryAddress] = await contracts.methods.getDeployedBatteries().call();
  battery = await new web3.eth.Contract(
    compiledBattery.abi,
    batteryAddress
  );
  });

describe('Contracts', () => {
  it('deploys all the contracts', () => {
    assert.ok(contracts.options.address);
  });

  it('marks caller as the manufacturer', () => {
    assert.ok(insurance.options.address);
  });
  
  it('EV Purchase', () => {
    assert.ok(battery.options.address);
  });
});
