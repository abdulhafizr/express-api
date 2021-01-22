const TodoList = require('../../../models/TodoList');

module.exports = (request, response) => {
    TodoList.find({}, (error, data) => {
        if(error) return response.status(500).json({message: 'Internal Server Error', error});

        response.status(200).json({
            message: 'Get TodoLists Successfully',
            data,
            method: request.method
        })
    })
}