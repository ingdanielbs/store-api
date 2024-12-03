const saleRepo = require('../repositories/saleRepository');

const getTotalSales = async (startDate, endDate) => {
    return await saleRepo.getTotalSales(startDate, endDate);
}

const getSaleById = async (id) => {
    return await saleRepo.getSaleById(id);
}

const getSales = async () => {
    return await saleRepo.getSales();
}

module.exports = {
    getTotalSales,
    getSaleById,
    getSales
}