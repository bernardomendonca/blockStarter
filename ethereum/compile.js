const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

//Deleting the build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

//Reading the contents of the campaign.sol file
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

//outputing the contracts from the compiler:
const output = solc.compile(source, 1).contracts;

//Create the build folder:
fs.ensureDirSync(buildPath);

//outputing the 2 files into the build folder.
// PS -> A file can't have a semicolon in front of its name on Windows, therefore the replace
for (let contract in output) {
    let name = contract.replace(':', '');
    fs.outputJsonSync(
        path.resolve(buildPath, name + '.json'),
        output[contract]
    );
}