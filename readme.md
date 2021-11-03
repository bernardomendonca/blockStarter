# BlockStarter

BlockStarter is a crowdsourcing platform built for the decetralized web.
Build as part of Stephen Grider's Ethereum and Solidity developer short course.

## How does it work?

This is an analogy of KickStarter built on the Ethereum blockchain. Smart Contracts are being used to guarantee the integrity of every transaction.
Individuals can create campaigns, and receive contributions (with minimum amount stipulated).
Campaign owners will then be able to request funds to develop the project further.
Lastly, contributors will vote on the campaign owner's requests in order to make the funds available.
![BlockStarter_campaignDescription](https://res.cloudinary.com/dxbk4zeyc/image/upload/v1635914157/GitHub%20Readme/BlockStarter1.png)
![BlockStarter_requestFunds](https://res.cloudinary.com/dxbk4zeyc/image/upload/v1635914157/GitHub%20Readme/BlockStarter2.png)

## The tech

This project was built as an experiment in order to integrate a Decentralised Ledger Techonology (Ethereum) with a NodeJS App.
Smart Contracts were written in Solidity and compiled with the solc library.
web3.js was used to grant access to the Ethereum blockchain by using web-based wallets (such as MetaMask).
More info about the libraries used down there :point_down:

Everything was built using the Rinkeby testnet! If you want to build something like that in the mainnet, make sure to use the correct Infura endpoint.

## Installation

Clone this repo and use the node package manager [npm](https://pip.pypa.io/en/stable/) to install the dependencies.

```bash
npm install
```

## Running

```bash
npm run dev
```

## Built with

- [Solidity](https://docs.soliditylang.org/en/v0.8.9/) - OBJ oriented language for writing smart contracts. Governs the behaviour of accounts within the Ethereum Decentralised Ledger.
- [Node.JS](https://nodejs.org/en/) - Runtime. Fantastic for scalable applications.
- [Next.JS](https://github.com/vercel/next.js) - Super awesome straightfoward routing framework
- [Next Routes](https://github.com/fridays/next-routes) - Easy to use dynamic routing for NextJS
- [Web3JS](https://github.com/ChainSafe/web3.js) - Ethereum JavaScript API
- [React](https://github.com/facebook/react) - JS library used to build the front-end interfaces
- [Semantic UI](https://github.com/Semantic-Org/Semantic-UI-React) - Out of the shelf components to quickly build responsive layouts
- [Truffle](https://github.com/trufflesuite/truffle) - Super powerful dev environment for testing on Ethereum
- [Ganache](https://github.com/trufflesuite/ganache-ui) - Local network for testing
- [Mocha](https://mochajs.org/) - Good ol' JavasCript testing framework
- [HDWallet Provider](https://www.npmjs.com/package/@truffle/hdwallet-provider) - Wallet-enabled web3 provider
- [solc](https://www.npmjs.com/package/solc) - Solidity compiler
- [Infura](https://infura.io/) - High available API's to develop on Ethereum testnet and Mainnet

## Modifications

Go crazy and build yourself something awesome :)
