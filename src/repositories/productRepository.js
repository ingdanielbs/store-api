const Product = require('../models/Product');

/* createProduct */
const createProduct = async (productData) => {
    return await Product.create(productData);
}
/* findProductByName */
const findProductByName = async (name) => {
    return await Product.findOne({ name });
}
/* updateProduct */
const updateProduct = async (id, productData) => {
    return await Product.findByIdAndUpdate(id, productData, { new: true });
}
/* deleteProduct */
const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
}
/* getProductById */
const getProductById = async (id) => {
    return await Product.findById(id);
 }
/* getAllProducts */
const getAllProducts = async () => {
    return await Product.find();
}

const changeStateProduct = async (id, state) => {
    return await Product.findByIdAndUpdate(id, { state})
} 

const updateProductStock = async (id, quantity) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Producto no encontrado');
    }
    product.stock += quantity;
    return await product.save();
}

module.exports = {
    createProduct,
    findProductByName,
    updateProduct,
    deleteProduct,
    getProductById,
    getAllProducts,
    changeStateProduct,
    updateProductStock
}