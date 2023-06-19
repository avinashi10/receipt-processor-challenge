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

// Check what's in map

// const receiptData = {
//   "retailer": "M&M Corner Market",
//   "purchaseDate": "2022-03-20",
//   "purchaseTime": "14:33",
//   "items": [
//     {
//       "shortDescription": "Gatorade",
//       "price": "2.25"
//     },{
//       "shortDescription": "Gatorade",
//       "price": "2.25"
//     },{
//       "shortDescription": "Gatorade",
//       "price": "2.25"
//     },{
//       "shortDescription": "Gatorade",
//       "price": "2.25"
//     }
//   ],
//   "total": "9.00"
// };

// const hashReceipt = SHA256(JSON.stringify(receiptData)).toString();
// receiptMap.set(hashReceipt, receiptData);
// console.log("ID: ", hashReceipt);
// const hashId = SHA256(JSON.stringify(hashReceipt)).toString();


// console.log("SEARCH: ", receiptMap.get(hashId));
