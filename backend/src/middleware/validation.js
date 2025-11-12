const validateHealthTipRequest = (req, res, next) => {
  const { symptom, phase } = req.body;

  // Check if symptom exists and is a non-empty string
  if (!symptom || typeof symptom !== 'string' || symptom.trim().length === 0) {
    return res.status(400).json({
      error: 'Symptom is required and must be a non-empty string'
    });
  }

  // Check symptom length
  if (symptom.length > 200) {
    return res.status(400).json({
      error: 'Symptom must be 200 characters or less'
    });
  }

  // Check if phase exists
  if (!phase) {
    return res.status(400).json({
      error: 'Phase is required'
    });
  }

  next();
};

const validateQuoteRequest = (req, res, next) => {
  const { phase } = req.body;

  const validPhases = ['menstrual', 'follicular', 'ovulation', 'luteal'];

  if (!phase || typeof phase !== 'string') {
    return res.status(400).json({
      error: 'Phase is required and must be a string'
    });
  }

  if (!validPhases.includes(phase.toLowerCase())) {
    return res.status(400).json({
      error: `Phase must be one of: ${validPhases.join(', ')}`
    });
  }

  // Normalize phase to lowercase
  req.body.phase = phase.toLowerCase();
  next();
};

module.exports = {
  validateHealthTipRequest,
  validateQuoteRequest
};

