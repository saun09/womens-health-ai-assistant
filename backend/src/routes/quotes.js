const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
const { validateQuoteRequest } = require('../middleware/validation');

router.post('/', validateQuoteRequest, quoteController.generateQuote);

module.exports = router;