const express = require('express');
const { body } = require('express-validator');
const authUser = require('../config/authUser');
const app = express();

const { store } = require('../controllers/todolist');

app.post('/',
    [
        body('title').isLength({min: 1}),
        body('body').isLength({min: 1})
    ],
    authUser,
    store
)

module.exports = app;