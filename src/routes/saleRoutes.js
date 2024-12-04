const express = require('express');
const saleController = require('../controllers/saleController');
const { getSaleByIdValidation } = require('../middlewares/saleMiddleware');
const { auth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/total', auth, saleController.getTotalSales);
router.get('/:id', auth, getSaleByIdValidation, saleController.getSaleById);
router.get('/', auth, saleController.getSales);

module.exports = router;