const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);

router.post('/add', customerController.add);

router.get('/delete/:idCliente', customerController.delete);

router.get('/update/:idCliente', customerController.updateForm);
router.post('/update/:idCliente', customerController.update);

module.exports = router;