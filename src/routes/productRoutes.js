const express = require('express');
const productController = require('../controllers/productController');
const {
    createProductValidation,
    updateProductValidation,
    deleteProductValidation,
    getProductByIdValidation,
    changeStateProductValidation
} = require('../middlewares/productMiddleware');
const { auth } = require('../middlewares/authMiddleware');


const router = express.Router();

router.post('/', auth, createProductValidation, productController.createProduct);
router.put('/:id', auth, updateProductValidation, productController.updateProduct);
router.delete('/:id', auth, deleteProductValidation, productController.deleteProduct);
router.get('/', auth, productController.getAllProducts);
router.get('/:id', getProductByIdValidation, productController.getProductById);
router.patch('/:id', auth, changeStateProductValidation, productController.changeStateProduct);
router.get('/search/:name', auth, productController.getProductByName);

module.exports = router;