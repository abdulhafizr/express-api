const express = require('express');
const app = express();

const { signin, signup } = require('../controllers/auth');

app.post('/signin', signin);
app.post('/signup', signup);

module.exports = app;