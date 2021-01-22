const TodoList = require('../../../models/TodoList');
const { validationResult } = require('express-validator');

module.exports = (request, response) => {
    const errors = validationResult(request);
    const { title, body } = request.body;

    if(!errors.isEmpty()) return response.status(400).json({
        message: 'Request Error',
        data: {title, body},
        errors: errors.array(),
        method: request.method
    })

    TodoList.create({
        title,
        body
    }, (error, data) => {

        if(error) return response.status(500).json({message: 'Internal Server Error', error});
        
        response.status(201).json({
            message: 'Todo has created',
            data,
            method: request.method
        })
    })
}