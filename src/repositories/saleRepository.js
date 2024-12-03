
const Sale = require('../models/Sale');

const createSale = async (saleData) => {
    return await Sale.create(saleData);
}

const getTotalSales = async (startDate, endDate) => {
    const sales = await Sale.find({
        paymentDate: { $gte: startDate, $lte: endDate }
    });
    return sales.reduce((total, sale) => total + sale.totalValue, 0);
}

const getSaleById = async (id) => {
    return await Sale.findById(id);
}

const getSales = async () => {
    return await Sale.find();
}

module.exports = {
    createSale,
    getTotalSales,
    getSaleById,
    getSales
}