const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'ahaha';

module.exports = async (request, response, next) => {
    const token = request.header('auth-token');

    if(!token) return response.status(403).json({message: 'Access Forbidden!'});

    try {
        const verified = await jwt.verify(token, SECRET_KEY);
        request.user = verified;
        next();
    }catch (error) {
        response.status(401).json({message: 'Unauthorized!'});   
    }
}
