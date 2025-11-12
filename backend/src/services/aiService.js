const Groq = require('groq-sdk');
require('dotenv').config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const generateResponse = async (prompt) => {
  try {
    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY is not set in environment variables');
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 1.2,
      top_p: 0.9,
      max_tokens: 1024,
    });

    if (!completion.choices || completion.choices.length === 0) {
      throw new Error('No response from Groq API');
    }

    return completion.choices[0].message.content.trim();
  } catch (error) {
    // Log full error for debugging
    console.error('Groq API Error Details:', {
      message: error.message,
      status: error.status,
      response: error.response?.data || error.body
    });
    
    if (error.status === 401) {
      throw new Error('Invalid Groq API Key. Please check your API key in the .env file and ensure it is correct.');
    }
    
    if (error.message) {
      throw new Error(`Groq API error: ${error.message}`);
    }
    throw error;
  }
};

module.exports = {
  generateResponse
};

