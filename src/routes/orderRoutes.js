
const express = require('express');
const orderController = require('../controllers/orderController');
const { createOrderValidation, changeOrderStateValidation, getOrderbyIdValidation } = require('../middlewares/orderMiddleware');

const router = express.Router();

router.post('/', createOrderValidation, orderController.createOrder);
router.patch('/:id', changeOrderStateValidation, orderController.changeOrderState);
router.get('/:id', getOrderbyIdValidation, orderController.getOrderById);
router.get('/', orderController.getOrders);

module.exports = router;