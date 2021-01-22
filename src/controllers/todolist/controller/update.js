const TodoList = require('../../../models/TodoList');
const { validationResult } = require('express-validator');

module.exports = (request, response) => {
    const todoId = request.params.todoId;

    if(!todoId) return response.status(400).json({
        message: 'Bad Request',
        method: request.method
    })

    const errors = validationResult(request);

    if(!errors.isEmpty()) return response.status(400).json({
        message: 'Bad Request',
        data: {title, body},
        errors: errors.array(),
        method: request.method
    })

    const { title, body } = request.body;

    TodoList.updateOne({_id: todoId}, {title, body}, (error, data) => {
        if(error) return response.status(500).json({message: 'Internal Server Error', error});

        response.status(200).json({
            message: 'Todo has updated',
            data: {title, body},
            method: request.method
        })
    })

}