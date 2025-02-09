const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// הכנס את ה-API Key שלך כאן
const API_KEY = "rnd_bCnP7imO7FLqoSuvt1Nis0iJ9oXO";

// Endpoint לקבלת רשימת האפליקציות
app.get('/apps', async (req, res) => {
    try {
        const response = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving apps');
    }
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});