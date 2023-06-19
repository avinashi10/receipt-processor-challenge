// LIBRARY IMPORTS
const express = require('express');
const router = express.Router();

// LOCAL IMPORTS
const controller = require('./controller.js')

router.post('/receipts/process', controller.createReceipt);
router.get('/receipts/:id/points', controller.getPoints);

module.exports = router;