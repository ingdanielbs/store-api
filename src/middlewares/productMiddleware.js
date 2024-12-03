const { body, param } = require('express-validator')

const productBaseValidation = [
    body('name').isString().isLength({ min: 1 }).withMessage('El nombre del producto debe ser un texto y tener al menos 1 caracter'),
    body('stock').isInt({ min: 0 }).withMessage('El stock del producto debe ser un número entero mayor o igual a 0'),
    body('price').isFloat({ min: 0 }).withMessage('El precio del producto debe ser un número mayor o igual a 0'),
    body('state').optional().isBoolean().withMessage('El estado del producto debe ser un valor booleano'),
    body('image').optional().isString().withMessage('La imagen del producto debe ser un texto')
]

const createProductValidation = [
    ...productBaseValidation
]

const updateProductValidation = [
    param('id').isMongoId().withMessage('El ID del producto no es válido'),
    ...productBaseValidation
]

const deleteProductValidation = [
    param('id').isMongoId().withMessage('El ID del producto no es válido')
]

const getProductByIdValidation = [
    param('id').isMongoId().withMessage('El ID del producto no es válido')
]

const changeStateProductValidation = [
    param('id').isMongoId().withMessage('El ID del producto no es válido'),
    body('state').isBoolean().withMessage('El estado del producto debe ser un valor booleano')
]

module.exports = {
    createProductValidation,
    updateProductValidation,
    deleteProductValidation,
    getProductByIdValidation,
    changeStateProductValidation
}