// LIBRARY IMPORTS
const { SHA256 } = require('crypto-js');

// CREATE A HASHMAP TO STORE DATA
const receiptMap = new Map();

// CREATE GET AND SET FUNCTIONS FOR THE HASHMAP
module.exports = {
  setReceipt: (receipt) => {
    const hash = SHA256(receipt).toString();
    receiptMap.set(hash, receipt);
  },
  getReceipt: (id) => {
    return receiptMap.get(id);
  }
};
