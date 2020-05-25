const { BlockChain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('790454c23dd380f571d450b7d9700318e5d5f63d091d989820c67dfeb8a13d7b');
const myWalletAddress = myKey.getPublic('hex');

let coin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);

console.log('\n Starting the miner...  ');
coin.minePendingTrasactions(myWalletAddress);


console.log('\nBalance of almog is', coin.getBalanceOfAddress(myWalletAddress));

coin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', coin.isChainValid());
//console.log('\n', coin.getBalanceOfAddress('public key goes here'));
