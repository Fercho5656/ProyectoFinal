import express from 'express'
import indexController from '../controllers/indexController.js'
import customerController from '../controllers/customerController.js'
import categoriesController from '../controllers/categoriesController.js'
import providersController from '../controllers/providersController.js'
import usersController from '../controllers/usersController.js'
import productsController from '../controllers/productsController.js'

const router = express.Router();
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

//Providers
router.get('/providers', providersController.list);
router.post('/providers/add', providersController.add);
router.get('/providers/delete/:idProveedor', providersController.delete);
router.get('/providers/update/:idProveedor', providersController.updateForm);
router.post('/providers/update/:idProveedor', providersController.update);

//Users
router.get('/users', usersController.list);
router.post('/users/add', usersController.add);
router.get('/users/delete/:idUsuario', usersController.delete);
router.get('/users/update/:idUsuario', usersController.updateForm);
router.post('/users/update/:idUsuario', usersController.update);

//Products
router.get('/products', productsController.list);
router.post('/products/add', productsController.add);
router.get('/products/delete/:idProducto', productsController.delete);
router.get('/products/update/:idProducto', productsController.updateForm);
router.post('/products/update/:idProducto', productsController.update);

export default router;