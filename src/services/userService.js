
const userRepo = require('../repositories/userRepository');

const createUser = async (userData) => {
    return await userRepo.createUser(userData);
}

const getUserById = async (id) => {
    return await userRepo.getUserById(id);
}

const updateUser = async (id, userData) => {
    return await userRepo.updateUser(id, userData);
}

const deleteUser = async (id) => {
    return await userRepo.deleteUser(id);
}

module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser
}