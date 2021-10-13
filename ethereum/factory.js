// Getting the instance that was created in web3.js (NOT THE LIBRARY!)
import web3 from './web3'
// importing the campaign Factory ABI
import campaignFactory from './build/campaignFactory';

// Creating the campaignFactory instance
// For that, it will be necessary to bring in the ABI and bytecode
const instance = new web3.eth.Contract(
    // This particular contract has been exported as a JSON, therefore, it will be parsed as so:
    JSON.parse(campaignFactory.interface),
    // The address previously generated when running deploy.js
    '0xE389fD00FCb7E14F3c660547311c6c95FBF0B9eA'
);

export default instance;