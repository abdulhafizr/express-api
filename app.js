require('dotenv/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3003;
const DB_CONNECTIONS = process.env.DB_CONNECTIONS || 'mongodb://localhost:27017/ahr_db';

// Auth routes
const authRoutes = require('./src/routes/authRoutes');
const todoListRoutes = require('./src/routes/todoListRoutes');

// Handle CORS POLICY
app.use(cors());
// Handle request.body 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// MongoDB connection with mongoose
mongoose.connect(DB_CONNECTIONS, {useNewUrlParser: true, useUnifiedTopology: true});

// Check mongoDB connection
let db = mongoose.connection;
// Handle mongoDB connection on error
db.on('error', console.error.bind(console, 'Connection Database Error!'));
// Handle mongoDB connection on success
db.once('open', () => {
    console.log('Connection Database Successfully!')
})

// All Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/todolist', todoListRoutes);

// Running Server in PORT
app.listen(PORT, () => {
    console.log(`Server Running in ${PORT}`);
})