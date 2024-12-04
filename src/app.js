const express = require('express');
const connectDB = require('./config/database');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const saleRoutes = require('./routes/saleRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
connectDB();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h1>¡BIENVENIDO A API STORE!</h1>')
});
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/sales', saleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;