const express = require('express');
const productController = require('../controllers/productController');
const {
    createProductValidation,
    updateProductValidation,
    deleteProductValidation,
    getProductByIdValidation,
    changeStateProductValidation
} = require('../middlewares/productMiddleware');

const router = express.Router();

router.post('/', createProductValidation, productController.createProduct);
router.put('/:id', updateProductValidation, productController.updateProduct);
router.delete('/:id', deleteProductValidation, productController.deleteProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', getProductByIdValidation, productController.getProductById);
router.patch('/:id', changeStateProductValidation, productController.changeStateProduct);
router.get('/search/:name', productController.getProductByName);

module.exports = router;