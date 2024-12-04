const express = require('express');
const orderController = require('../controllers/orderController');
const { createOrderValidation, changeOrderStateValidation, getOrderbyIdValidation } = require('../middlewares/orderMiddleware');
const { auth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', auth, createOrderValidation, orderController.createOrder);
router.patch('/:id', auth, changeOrderStateValidation, orderController.changeOrderState);
router.get('/:id', auth, getOrderbyIdValidation, orderController.getOrderById);
router.get('/', auth, orderController.getOrders);

module.exports = router;