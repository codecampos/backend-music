const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const CartController = require('./controllers/CartController');
const ProductController = require('./controllers/ProductController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sessions', SessionController.store);
routes.post('/cart', CartController.store);
routes.get('/cartShow', CartController.show);
routes.post('/products', upload.single('thumbnail'), ProductController.store);
routes.get('/products', ProductController.index);
routes.delete('/products', ProductController.delete);
routes.delete('/cart', CartController.delete);
routes.get('/dashboard', DashboardController.show);


module.exports = routes;
