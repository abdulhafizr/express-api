const User = require('../../../models/User');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
module.exports = async (request, response) => {
    const errors = validationResult(request);

    if(!errors.isEmpty()) return response.status(400).json({message: errors});

    const { name, username, password, email } = request.body;

    const emailExist = await User.findOne({email});

    if(emailExist) return response.status(400).json({message: 'Email already exist!'});

    const hashPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));

    User.create({name, username, password: hashPassword, email}, (error, data) => {

        if(error) return response.status(500).json({message: 'Internal Server Error', error});

        response.status(200).json({
            message: 'User has created!',
            data
        })
    })

}