const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledContracts = require('../ethereum/build/DeployContracts.json');
const compiledInsurance = require('../ethereum/build/Insurance.json');
const compiledPurchase = require('../ethereum/build/EVPurchase.json')
const compiledBattery = require('../ethereum/build/BatteryMonitoring.json')
const interface = compiledContracts.abi;
const bytecode = compiledContracts.evm.bytecode.object;

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

  contracts = await new web3.eth.Contract(interface)
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '2000000' });

  /*await contracts.methods.deployInsurance().send({
    from: accounts[0],
    gas: '1000000'
  });

  await contracts.methods.deployPurchase().send({
    from: accounts[0],
    gas: '1000000'
  });

  await contracts.methods.deployBattery().send({
    from: accounts[0],
    gas: '1000000'
  });

  [insuranceAddress] = await contracts.methods.getDeployedInsurances().call();
  insurance = await new web3.eth.Contract(
    JSON.parse(compiledInsurance.interface),
    insuranceAddress
  );

  [purchaseAddress] = await contracts.methods.getDeployedPurchases().call();
  purchase = await new web3.eth.Contract(
    JSON.parse(compiledPurchase.interface),
    purchaseAddress
  );

  [batteryAddress] = await contracts.methods.getDeployedBatteries().call();
  battery = await new web3.eth.Contract(
    JSON.parse(compiledBattery.interface),
    batteryAddress
  );*/
  });

describe('Contracts', () => {
  it('deploys all the contracts', () => {
    assert.ok(contracts.options.address);
    //assert.ok(insurance.options.address);
    //assert.ok(battery.options.address);
    //assert.ok(purchase.options.address);
  });

  /*it('marks caller as the manufacturer', async () => {
    const manufacturer = await insurance.methods.manufacturer().call();
    assert.equal(accounts[0], manufacturer);
  });

  it('EV Purchase', async () => {
    await purchase.methods.send({
      value: web3.utils.toWei('0.2','ether'),
      from: accounts[1]
    });
    const isPurchased = await purchase.methods.manufacturer().call();
    assert(isPurchased);
  });

  it('requires a minimum contribution', async () => {
    try {
      await campaign.methods.contribute().send({
        value: '5',
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows a manager to make a payment request', async () => {
    await campaign.methods
      .createRequest('Buy batteries', '100', accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    const request = await campaign.methods.requests(0).call();

    assert.equal('Buy batteries', request.description);
  });

  it('processes requests', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    await campaign.methods
      .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({ from: accounts[0], gas: '1000000' });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);

    assert(balance > 104);
  });*/
});
