import Web3 from 'web3';

window.ethereum.request({ method: 'eth_requestAccounts' })

//creating an instance of Web3:
const web3 = new Web3(window.ethereum);

export default web3;