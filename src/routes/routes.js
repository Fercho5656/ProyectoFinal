const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const customerController = require('../controllers/customerController');
const categoriesController = require('../controllers/categoriesController');

//Index
router.get('/', indexController.index);

//Customers
router.get('/customers', customerController.list);
router.post('/customers/add', customerController.add);
router.get('/customers/delete/:idCliente', customerController.delete);
router.get('/customers/update/:idCliente', customerController.updateForm);
router.post('/customers/update/:idCliente', customerController.update);

//Categories
router.get('/categories', categoriesController.list);
router.post('/categories/add', categoriesController.add);
router.get('/categories/delete/:idCategoria', categoriesController.delete);
router.get('/categories/update/:idCategoria', categoriesController.updateForm);
router.post('/categories/update/:idCategoria', categoriesController.update);


module.exports = router;