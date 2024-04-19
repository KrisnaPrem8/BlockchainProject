import web3 from './web3';
import DeployContracts from './build/DeployContracts.json';

const instance = new web3.eth.Contract(
  DeployContracts.abi,
  '0x902600948f85d508656396a80a2106b28e86d709'
);

export default instance;
