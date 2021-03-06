const express = require('express');
const { body } = require('express-validator');
const authUser = require('../config/authUser');
const app = express();

const { store, index, update, show, destroy } = require('../controllers/todolist');

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
    authUser,
    update
);

app.get('/:todoId', authUser, show);

app.delete('/:todoId', authUser, destroy);

module.exports = app;