const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const customerController = require('../controllers/customerController');

//Index
router.get('/', indexController.index);

//Customers
router.get('/customers', customerController.list);
router.post('/customers/add', customerController.add);

router.get('/customers/delete/:idCliente', customerController.delete);

router.get('/customers/update/:idCliente', customerController.updateForm);
router.post('/customers/update/:idCliente', customerController.update);

module.exports = router;