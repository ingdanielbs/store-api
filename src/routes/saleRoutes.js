
const express = require('express');
const saleController = require('../controllers/saleController');
const { getSaleByIdValidation } = require('../middlewares/saleMiddleware');


const router = express.Router();

router.get('/total', saleController.getTotalSales);
router.get('/:id', getSaleByIdValidation, saleController.getSaleById);
router.get('/', saleController.getSales);


module.exports = router;