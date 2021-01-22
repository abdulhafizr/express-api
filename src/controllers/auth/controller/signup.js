const User = require('../../../models/User');
const { validationResult } = require('express-validator');
module.exports = (request, response) => {
    const errors = validationResult(request);

    if(!errors.isEmpty()) return response.status(400).json({message: errors});
    response.send('Signup');
}