// LOCAL IMPORTS
const receiptModel = require('./model.js');

module.exports = {
  createReceipt: (req, res) => {
    model.setReceipt(req.body)
      .then((receiptId) => res.json({ id: receiptId }))
      .catch((err) => res.status(400).send(err));
  },
  getPoints: (req, res) => {
    model.findReceiptById(req.params)
      .then(receiptData) => {
        // Calculate points based on receipt data
        const points = calculatePoints(receiptData);
        res.json({ points: points });
      }
      .catch(err) => {
        res.status(404).send("No receipt found for that id: ", err)
      }
  }
}