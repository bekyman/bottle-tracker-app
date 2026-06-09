require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const ledgerRoutes = require('./routes/ledgerRoutes');

app.use('/api/orders', orderRoutes);
app.use('/api/ledger', ledgerRoutes);
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Bottle Tracker API is running...');
});

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

console.log("Attempting to connect to:", DB_URI ? DB_URI.replace(/:[^:@]+@/, ":****@") : "URI IS MISSING!");

mongoose.connect(DB_URI, { 
    serverSelectionTimeoutMS: 5000 // Give up after 5 seconds if it can't connect
})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('CRITICAL ERROR: Could not connect to MongoDB:', err);
    });