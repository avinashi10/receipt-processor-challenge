// LIBRARY IMPORTS
const { SHA256 } = require('crypto-js');

// CREATE A HASHMAP TO STORE DATA
const receiptMap = new Map();

// CREATE GET AND SET FUNCTIONS FOR THE HASHMAP
module.exports = {
  setReceipt: (receiptData) => {
    const hash = SHA256(JSON.stringify(receiptData)).toString();
    receiptMap.set(hash, receiptData);
    return hash;
  },
  findReceiptById: (id) => {
    return receiptMap.get(id);
  }
};
