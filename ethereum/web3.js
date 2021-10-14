import Web3 from 'web3';

//preparing to create an instance of Web3:
let web3;

// Checking if the user is in the browser AND running metamask
// If window is defined, means that we are in the browser!
// If the window.etherem id defined, the user is running metamask!
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    //The following code will "hijack" the metamask current provider and create our own instance of web3
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
} else {
    // The following code runs if the user is NOT using metamask (or in the server)
    // We'll set up our OWN provider (infura) and use this as the provider for our web3 instance
    const provider = new Web3.providers.HttpProvider(
        process.env.INFURA
    );
    web3 = new Web3(provider);
}
 
export default web3;