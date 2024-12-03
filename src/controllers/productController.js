const {validationResult} = require('express-validator');
const productService = require('../services/productService')

const createProduct = async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const product = await productService.addProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getAllProducts = async (req, res) =>{
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getProductById = async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const product = await productService.getProductById(req.params.id);
        if(!product){
            return res.status(404).json({error: 'Producto no encontrado'})
        }
        res.status(200).json(product);
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateProduct = async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try{
        const product = await productService.updateProduct(req.params.id, req.body);
        if(!product){
            return res.status(404).json({error: 'Producto no encontrado'})
        }
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const deleteProduct = async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try{
        const product = await productService.deleteProduct(req.params.id);
        if(!product){
            return res.status(404).json({error: 'Producto no encontrado'})
        }
        res.status(204).end();
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const getProductByName = async (req, res) =>{
    try{
        const product = await productService.getProductByName(req.params.name);
        if(!product){
            return res.status(404).json({error: 'Producto no encontrado'})
        }
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

const changeStateProduct = async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try{
        const product = await productService.changeStateProduct(req.params.id, req.body.state);
        if(!product){
            return res.status(404).json({error: 'Producto no encontrado'})
        }
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductByName,
    changeStateProduct
}