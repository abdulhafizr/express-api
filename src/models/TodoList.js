const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema({
    title: String,
    body: String
}, {
    timestamps: true
})

module.exports = mongoose.model('TodoList', TodoListSchema);