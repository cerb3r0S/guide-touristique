require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth', require('./routes/authRoutes'));

app.listen(5000, () => console.log('Server is running'));