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

    // since we potentially deployed a few contracts, we want to specify which is the address:
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
})

describe('Campaigns', () => {
    //making sure the testing setup works:
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    })

    // making sure the caller of the campaign is the manager
    it("marks caller as the campaign manager", async () => {
        const manager = await campaign.methods.manager().call();
        // when runing the assert.equal, the first argument is what we expect it to be 
        // the second argument is what the thing IS.
        assert.equal(accounts[0], manager);
    });

    it('allows people to contribute money to the campaign and marks them as approvers', async() => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        });
        //we are using the approvers methods to take a look at the mapping with accounts[1] as the key
        // this returns a boolean, either true or false
        //we then use assert to check that
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    });  

    // with this test, since we want to assert that an error occured, we'll use a try/catch block
    it('requires a minimum contribution', async() => {
        try {
            await campaign.methods.contribute().send({
                value: '5',
                from: accounts[1]
            });
            assert(false);
        } catch(err) {
            assert(err);
        }
    });

    it('allows a manager to request funds', async() => {
        await campaign.methods
        .createRequest('Request: Buy Doritos','100',accounts[1])
        .send({
            from: accounts[0],
            gas: '1000000'
        });
        
        const request = await campaign.methods.requests(0).call();

        assert.equal('Request: Buy Doritos', request.description);
    });

    it('processes the request', async() => {
        // using accounts[0] to contribute 10 ether
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });

        // manager creating a request for funds:
        await campaign.methods
        .createRequest('Testing request', web3.utils.toWei('5', 'ether'), accounts[1])
        .send({ from: accounts[0], gas: '1000000' })

        // voting to approve the request
        await campaign.methods.approveRequest(0).send({ 
            from: accounts[0],
            gas: '1000000'
         });

         // manager calling to finalise the request and release funds:
         await campaign.methods.finalizeRequest(0).send({
             from: accounts[0],
             gas: '1000000'
         });

         // checking the balance of accounts[1] to check if they received the funds
         let balance = await web3.eth.getBalance(accounts[1]);
         // converting balance to ether (from wei)
         balance = web3.utils.fromWei(balance, 'ether');
         // and making it a number (float)
         balance = parseFloat(balance);

         console.log(balance);
         assert(balance > 103);
    });
});
