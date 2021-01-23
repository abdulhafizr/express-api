const TodoList = require('../../../models/TodoList');

module.exports = (request, response) => {
    const todoId = request.params.todoId;

    if(!todoId) return response.status(400).json({
        message: 'Bad Request',
        method: request.method
    })

    TodoList.findOne({_id: todoId}, (error, data) => {
        if(error) return response.status(500).json({message: 'Invalid TodoList Id', error});

        response.status(200).json({
            message: 'Get Detail Todo Success',
            data,
            method: request.method
        })
    })
}