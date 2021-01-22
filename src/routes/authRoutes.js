const express = require('express');
const { body } = require('express-validator');
const app = express();

const { signin, signup } = require('../controllers/auth');

// Signin Route 
app.post(
    '/signin',
    [
        body('email').isEmail(),
        body('password').isLength({min: 6})
    ],
    signin
);

// Signup Route
app.post(
    '/signup',
    [
        body('name').isLength({min: 3}),
        body('username').isLength({min: 3}),
        body('password').isLength({min: 6}),
        body('email').isEmail()
    ],
    signup
);

module.exports = app;