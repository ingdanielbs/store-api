
const { validationResult } = require('express-validator');
const orderService = require('../services/orderService');

const createOrder = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const changeOrderState = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const order = await orderService.changeOrderState(req.params.id, req.body.state);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getOrderById = async (req, res) => {
    try {
        const order = await orderService.getOrderById(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createOrder,
    changeOrderState,
    getOrderById,
    getOrders
}