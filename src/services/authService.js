
const jwt = require('jsonwebtoken');
const userRepo = require('../repositories/userRepository');

const login = async (email, password) => {
    const user = await userRepo.findUserByEmail(email);
    if (!user || !user.comparePassword(password)) {
        throw new Error('Invalid email or password');
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
}

module.exports = {
    login
}