require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bottle Tracker API is running...');
});

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/bottleTracker';

mongoose.connect(DB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('Could not connect to MongoDB:', err));