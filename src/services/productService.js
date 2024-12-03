const productRepo = require('../repositories/productRepository');

/* addProduct */
const addProduct = async (productData) => {
    const existingProduct = await productRepo.findProductByName(productData.name);
    if (existingProduct){
        existingProduct.stock += productData.stock;
        return await existingProduct.save();
    }
    return await productRepo.createProduct(productData); 
}
/* getAllProduct */
const getAllProducts = async () => {
    return await productRepo.getAllProducts();
}
/* getProductById */
const getProductById = async (id) => {
    return await productRepo.getProductById(id);
}
/* updateProduct */
const updateProduct = async (id, productData) => {
    return await productRepo.updateProduct(id, productData);
}
/* deleteProduct */
const deleteProduct = async (id) => {
    return await productRepo.deleteProduct(id);
}

const getProductByName = async (name) => {
    return await productRepo.findProductByName(name);
}

const changeStateProduct = async (id, state) =>{
    return await productRepo.changeStateProduct(id, state);
}

const updateProductStock = async (id, quantity) => {
    const product = await productRepo.getProductById(id);
    if (!product) {
        throw new Error('Producto no encontrado');
    }
    product.stock += quantity;
    return await product.save();
}

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductByName,
    changeStateProduct,
    updateProductStock
}
