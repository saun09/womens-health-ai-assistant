const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const generateHealthTip = async (symptom, phase) => {
  try {
    const response = await fetch(`${API_URL}/health-tips`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symptom, phase }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to generate health tip');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating health tip:', error);
    throw error;
  }
};

export const generateQuote = async (phase) => {
  try {
    const response = await fetch(`${API_URL}/quotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phase }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to generate quote');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating quote:', error);
    throw error;
  }
};

