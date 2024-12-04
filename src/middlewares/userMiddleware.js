const { body, param } = require('express-validator');

const userBaseValidation = [
  body('name').isString().isLength({ min: 1 }).withMessage('El nombre debe ser un texto y tener al menos 1 caracter'),
  body('email').isEmail().withMessage('Debe ser un correo electrónico válido'),
  body('address').isString().isLength({ min: 1 }).withMessage('La dirección debe ser un texto y tener al menos 1 caracter'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  body('document').isString().isLength({ min: 1 }).withMessage('El documento debe ser un texto y tener al menos 1 caracter'),
  body('role').isIn(['Administrador', 'Cliente']).withMessage('El rol debe ser Administrador o Cliente')
];

const registerUserValidation = [
  ...userBaseValidation
];

const updateUserValidation = [
  param('id').isMongoId().withMessage('El ID del usuario no es válido'),
  ...userBaseValidation.map(validation => validation.optional())
];

const getUserByIdValidation = [
  param('id').isMongoId().withMessage('El ID del usuario no es válido')
];

const changeStateUserValidation = [
  param('id').isMongoId().withMessage('El ID del usuario no es válido'),
  body('state').isBoolean().withMessage('El estado del usuario debe ser un valor booleano')
];

module.exports = {
  registerUserValidation,
  updateUserValidation,
  getUserByIdValidation,
  changeStateUserValidation
};
