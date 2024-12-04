const orderRepo = require('../repositories/orderRepository');
const productRepo = require('../repositories/productRepository');
const saleRepo = require('../repositories/saleRepository');

const createOrder = async (orderData) => {
    if (orderData.products.length < 1) {
        throw new Error('El pedido debe tener al menos un producto');
    }

    let totalValue = 0;
    for (const item of orderData.products) {
        const product = await productRepo.getProductById(item.productId);
        if (!product || product.stock < item.quantity) {
            throw new Error(`Stock insuficiente para el producto ${item.productId}`);
        }
        item.value = product.price * item.quantity;
        totalValue += item.value;
    }

    orderData.totalValue = totalValue;
    return await orderRepo.createOrder(orderData);
}

const changeOrderState = async (id, state) => {
    const order = await orderRepo.updateOrderState(id, state);
    if (state === 'Pagado') {
        for (const item of order.products) {
            await productRepo.updateProductStock(item.productId, -item.quantity);
        }

        await saleRepo.createSale({
            orderId: order._id,
            products: order.products,
            totalValue: order.totalValue,
            paymentDate: new Date()
        });
    } else if (state === 'Cancelado') {
        for (const item of order.products) {
            await productRepo.updateProductStock(item.productId, item.quantity);
        }
    }
    return order;
}

const getOrderById = async (id) => {
    return await orderRepo.getOrderById(id);
}

const getOrders = async () => {
    return await orderRepo.getOrders();
}

module.exports = {
    createOrder,
    changeOrderState,
    getOrderById,
    getOrders
}