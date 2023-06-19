// LOCAL IMPORTS
const receiptModel = require('./model.js');
const calculatePoints = require('./points.js');

module.exports = {
  createReceipt: (req, res) => {
    try {
      const receiptId = receiptModel.setReceipt(req.body);
      res.json({ id: receiptId });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getPoints: (req, res) => {
    try {
      const receiptData = receiptModel.findReceiptById(req.params.id);
      if (receiptData) {
        // const points = calculatePoints(receiptData);
        res.json(receiptData); //testing to see if it can do a simple get, change to points later
      } else {
        res.status(404).send("No receipt found for that id");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  },
}
