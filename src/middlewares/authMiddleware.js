const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        
        if (!user) throw new Error();
        
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Por favor autentícate' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'Administrador') {
        return res.status(403).json({ error: 'Acceso denegado' });
    }
    next();
};

module.exports = { auth, isAdmin };