const aiService = require('../services/aiService');
const promptService = require('../services/promptService');
const logger = require('../utils/logger');

const generateQuote = async (req, res, next) => {
  try {
    const { phase } = req.body;

    logger.info(`Generating wellness quote for phase: ${phase}`);

    const prompt = promptService.createQuotePrompt(phase);
    logger.debug(`Quote prompt generated (first 100 chars): ${prompt.substring(0, 100)}...`);
    const quote = await aiService.generateResponse(prompt);

    const response = {
      quote,
      phase,
      timestamp: new Date().toISOString()
    };

    logger.info(`Wellness quote generated successfully for ${phase}`);
    res.json(response);
  } catch (error) {
    logger.error(`Error generating quote: ${error.message}`, error);
    next(error);
  }
};

module.exports = {
  generateQuote
};

