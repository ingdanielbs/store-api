
const saleService = require('../services/saleService');

const getTotalSales = async (req, res) => {
    const { startDate, endDate } = req.query;
    try {
        const totalSales = await saleService.getTotalSales(new Date(startDate), new Date(endDate));
        res.status(200).json({ totalSales });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getSaleById = async (req, res) => {
    const { id } = req.params;
    try {
        const sale = await saleService.getSaleById(id);
        res.status(200).json(sale);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getSales = async (req, res) => {
    try {
        const sales = await saleService.getSales();
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getTotalSales,
    getSaleById,
    getSales
}