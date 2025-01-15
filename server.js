const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;
const API_KEY = 'e56df16206795e4484573165adc16a86';

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Weather API route (optional, for server-side API call)
app.get('/api/weather', async (req, res) => {
    const { city, country } = req.query;

    if (!city || !country) {
        return res.status(400).json({ error: 'City and country are required' });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=en&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            return res.status(data.cod).json({ error: data.message });
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
