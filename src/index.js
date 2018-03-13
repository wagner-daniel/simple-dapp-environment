const Web3 = require('web3');

console.log('test');

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

web3.eth.getAccounts().then(console.log);