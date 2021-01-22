const express = require('express');
const { body } = require('express-validator');
const authUser = require('../config/authUser');
const app = express();

const { store, index, update } = require('../controllers/todolist');

app.post('/',
    [
        body('title').isLength({min: 1}),
    ],
    authUser,
    store
)

app.get('/', authUser, index);

app.put('/:todoId', 
    [
        body('title').isLength({min: 1})
    ],
    update
);

module.exports = app;