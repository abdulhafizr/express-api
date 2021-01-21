require('dotenv/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT;
const DB_CONNECTIONS = process.env.DB_CONNECTIONS;

// Handle CORS POLICY
app.use(cors());
// Handle request.body 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// MongoDB connection with mongoose
mongoose.connect(DB_CONNECTIONS, {useNewUrlParser: true, useUnifiedTopology: true});

// auth Routes
app.get('/api/user/login', (request, response) => {
    response.send(`Login berhasil ${request.body.username}`)
}) 

// Check mongoDB connection
let db = mongoose.connection;
// Handle mongoDB connection on error
db.on('error', console.error.bind(console, 'Connection Database Error!'));
// Handle mongoDB connection on success
db.once('open', () => {
    console.log('Connection Database Successfully')
})

app.listen(PORT, () => {
    console.log(`Server Running in ${PORT}`);
})