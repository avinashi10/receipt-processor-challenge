// LOCAL IMPORTS
const receiptModel = require('./model.js');

module.exports = {
  createReceipt: (req, res) => {
    model.setReceipt(req.body)
      .then(() => res.send('Receipt added'))
      .catch((err) => res.status(400).send(err));
  },
  getReceiptId: (req, res) => {
    .then()
  }
}