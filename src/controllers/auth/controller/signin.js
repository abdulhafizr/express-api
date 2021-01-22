const User = require('../../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'ahaha';
const { validationResult } = require('express-validator');

module.exports = async (request, response) => {
    const errors = validationResult(request);

    if(!errors.isEmpty()) return response.status(400).json({message: errors}); 

    const { email, password } = request.body;

    const user = await User.findOne({email});

    if(!user) return response.status(400).json({message: 'Email doesnt exist', data: {email, password}});

    const passwordVerified = await bcrypt.compare(password, user.password);

    if(!passwordVerified) return response.status(400).json({message: 'Password wrong!', data: {email, password}});
    
    const token = jwt.sign({_id: user._id}, SECRET_KEY);

    response
    .status(200)
    .header('auth-token')
    .json({
        message: 'Login Successfully',
        data: {
            email,
            password,
            token
        }
    })
}