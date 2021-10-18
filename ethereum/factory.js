// Getting the instance that was created in web3.js (NOT THE LIBRARY!)
import web3 from "./web3";
// importing the campaign Factory ABI
import campaignFactory from "./build/campaignFactory";

// Creating the campaignFactory instance
// For that, it will be necessary to bring in the ABI and bytecode
const instance = new web3.eth.Contract(
  // This particular contract has been exported as a JSON, therefore, it will be parsed as so:
  JSON.parse(campaignFactory.interface),
  // The address previously generated when running deploy.js
  "0x76DcB1f64D1823af188E70E4a1af213C876C1BB4"
);

export default instance;
