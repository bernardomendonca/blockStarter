// Getting the instance that was created in web3.js (NOT THE LIBRARY!)
import web3 from "./web3";
// importing the Campaign ABI
import Campaign from "./build/Campaign.json";

const campaign = (address) => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};

export default campaign;
