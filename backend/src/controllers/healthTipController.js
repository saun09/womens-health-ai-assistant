const aiService = require('../services/aiService');
const promptService = require('../services/promptService');
const logger = require('../utils/logger');

const generateHealthTip = async (req, res, next) => {
  try {
    const { symptom, phase } = req.body;

    logger.info(`Generating health tip for symptom: ${symptom}, phase: ${phase}`);

    const prompt = promptService.createHealthTipPrompt(symptom, phase);
    const tip = await aiService.generateResponse(prompt);

    const response = {
      tip,
      symptom,
      phase,
      timestamp: new Date().toISOString()
    };

    logger.info(`Health tip generated successfully for ${symptom}`);
    res.json(response);
  } catch (error) {
    logger.error(`Error generating health tip: ${error.message}`, error);
    next(error);
  }
};

module.exports = {
  generateHealthTip
};

