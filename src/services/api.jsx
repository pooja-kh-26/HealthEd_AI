// services/api.js
// Create this file to centralize your API calls

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const simplifyText = async (text) => {
  try {
    const response = await fetch(`${API_URL}/simplify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error simplifying text:', error);
    throw error;
  }
};

export const getDrugInfo = async (drugName) => {
  try {
    const response = await fetch(`${API_URL}/drug/${drugName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching drug information:', error);
    throw error;
  }
};