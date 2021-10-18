// Getting the instance that was created in web3.js (NOT THE LIBRARY!)
// importing the Campaign ABI
import web3 from "./web3";
import Campaign from "./build/Campaign";

export default (address) => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};
