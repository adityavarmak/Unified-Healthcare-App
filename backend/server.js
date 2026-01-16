const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const doctorroutes = require('./routes/doctor.routes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/doctorapp')
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/doctor', doctorroutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
