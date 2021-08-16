const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const contractObject = require('../compile.js')
//console.log('Interface:' + contractObject);

//console.log('Interface:' + interface);
//console.log('bytecode:' + bytecode);

const jContract = JSON.parse(contractObject);
console.log('Interface:' + jContract.contracts);

const byteCode = jContract.contracts.contract.Inbox.evm.bytecode.stringgify();

let fetchedAccounts;
let inbox;
beforeEach(async() => {
    console.log('calling beforeEach');
    
    fetchedAccounts = await web3.eth.getAccounts();
    inbox = new web3.eth.Contract(jContract.contracts.contract.Inbox.abi)
        .deploy({data:byteCode, arguments: ['Hi there']})
        .send({from:fetchedAccounts[0], gas: '1000000'});
    //console.log(fetchedAccounts);

    /* web3.eth.getAccounts().then(fetchedAccounts => {
    console.log(fetchedAccounts);
    }); */
});

describe ('Inbox', () => {
    it("deploys a contract", () => {
        console.log(inbox);
    });
});

