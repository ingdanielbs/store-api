
const { body, param } = require('express-validator');

const createOrderValidation = [
    body('products').isArray({ min: 1 }).withMessage('El pedido debe tener al menos un producto'),
    body('products.*.productId').isMongoId().withMessage('El ID del producto no es válido'),
    body('products.*.quantity').isInt({ min: 1 }).withMessage('La cantidad del producto debe ser al menos 1')
];

const changeOrderStateValidation = [
    param('id').isMongoId().withMessage('El ID del pedido no es válido'),
    body('state').isIn(['Pendiente', 'Pagado', 'Cancelado']).withMessage('El estado del pedido no es válido')
];

const getOrderbyIdValidation = [
    param('id').isMongoId().withMessage('El ID del pedido no es válido')
];

module.exports = {
    createOrderValidation,
    changeOrderStateValidation,
    getOrderbyIdValidation
}