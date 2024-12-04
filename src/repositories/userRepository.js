const User = require('../models/User');

const createUser = async (userData) => {
    return await User.create(userData);
}

const getUserById = async (id) => {
    return await User.findById(id);
}

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
}

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    findUserByEmail
}