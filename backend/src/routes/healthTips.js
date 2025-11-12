const express = require('express');
const router = express.Router();
const healthTipController = require('../controllers/healthTipController');
const { validateHealthTipRequest } = require('../middleware/validation');

router.post('/', validateHealthTipRequest, healthTipController.generateHealthTip);

module.exports = router;