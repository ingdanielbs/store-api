const express = require('express');
const userController = require('../controllers/userController');
const { registerUserValidation, updateUserValidation, getUserByIdValidation } = require('../middlewares/userMiddleware');
const { auth, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', registerUserValidation, userController.createUser);
router.get('/:id', auth, getUserByIdValidation, userController.getUserById);
router.put('/:id', auth, updateUserValidation, userController.updateUser);
router.delete('/:id', auth, isAdmin, getUserByIdValidation, userController.deleteUser);

module.exports = router;