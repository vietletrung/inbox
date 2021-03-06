const path = require('path');
const fs = require('fs');

const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf-8');

var solcInput = {
    language: "Solidity",
    sources: { 
        contract: {
            content: source
        }
     },
    settings: {
        optimizer: {
            enabled: true
        },
        evmVersion: "byzantium",
        outputSelection: {
            "*": {
              "": [
                "legacyAST",
                "ast"
              ],
              "*": [
                "abi",
                "evm.bytecode.object",
                "evm.bytecode.sourceMap",
                "evm.deployedBytecode.object",
                "evm.deployedBytecode.sourceMap",
                "evm.gasEstimates"
              ]
            },
        }
    }
};

solcInput = JSON.stringify(solcInput);
var contractObject = solc.compile(solcInput);
//console.log(solc.compile(solcInput).contracts[":Inbox"])

//const jsonContract = JSON.parse(contractObject);

//console.log(solc.compile(solcInput).contracts[":contract"][":Inbox"])

//contractObject = JSON.parse(contractObject);

//console.log(contractObject);

module.exports = contractObject;