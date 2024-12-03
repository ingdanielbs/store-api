
const Order = require('../models/Order');

const createOrder = async (orderData) => {
    return await Order.create(orderData);
}

const updateOrderState = async (id, state) => {
    return await Order.findByIdAndUpdate(id, { state }, { new: true });
}

const getOrderById = async (id) => {
    return await Order.findById(id);
}

const getOrders = async () => {
    return await Order.find();
}

module.exports = {
    createOrder,
    updateOrderState,
    getOrderById,
    getOrders
}