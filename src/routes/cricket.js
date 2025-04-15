const express = require('express');
const axios = require('axios');
const router = express.Router();

const CRICAPI_KEY = process.env.CRICAPI_KEY;
const CRICAPI_BASE_URL = 'https://api.cricapi.com/v1';

// Get list of matches
router.get('/matches', async (req, res) => {
  try {
    const response = await axios.get(`${CRICAPI_BASE_URL}/countries?apikey=${CRICAPI_KEY}&offset=` + offset);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching matches:', error.message);
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
});

// Get score for specific match
router.get('/score/:uniqueId', async (req, res) => {
  try {
    const { uniqueId } = req.params;
    const response = await axios.get(
      `${CRICAPI_BASE_URL}/cricketScore?apikey=${CRICAPI_KEY}&unique_id=${uniqueId}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching score:', error.message);
    res.status(500).json({ error: 'Failed to fetch score' });
  }
});

module.exports = router;