const { body, param } = require('express-validator');

const getSaleByIdValidation = [
    param('id').isMongoId().withMessage('El ID de la venta no es válido')
];

module.exports = {
    getSaleByIdValidation
}