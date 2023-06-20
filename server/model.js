// LIBRARY IMPORTS
const { v4: uuidv4 } = require('uuid');

// CREATE A HASHMAP TO STORE DATA
const receiptMap = new Map();

// CREATE GET AND SET FUNCTIONS FOR THE HASHMAP
module.exports = {
  setReceipt: (receiptData) => {
    const receiptId = uuidv4(); // Generate a unique ID for the receipt
    receiptMap.set(receiptId, receiptData);
    console.log(receiptMap); // added temporarily to see how post requests are working
    return receiptId;
  },
  findReceiptById: (id) => {
    return receiptMap.get(id);
  }
};
