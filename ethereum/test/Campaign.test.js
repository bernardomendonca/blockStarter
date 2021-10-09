const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

// local of all accounts in the local ganache network
let accounts;
// reference to deployed instance of the factory
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    // get an account from the local ganache network
    accounts = await web3.eth.getAccounts();

    // create an instance of factory.
    // Contract() does not expect a JSON file (which the interface is, right now), therefore we parse it.
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    // deploying a new instance of factory
    .deploy({ data: compiledFactory.bytecode })
    // sending the deployed instance to the network using an account frm the array we created.
    .send({ from: accounts[0], gas: '1000000' });

    // Calling the createCampaign method from the factory contract
    await factory.methods.createCampaign('100')
    // sending the transaction from the first account in the Ganache local network:
    .send({ from: accounts[0], gas: '1000000' });

    // Call getDeployedCampaigns from the factory methods and add that to the first element of the array
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        // since we potentially deployed a few contracts, we want to specify which is the address:
        campaignAddress
    );
})
