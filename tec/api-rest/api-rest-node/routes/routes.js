'use strict'

const express = require('express')
const productController  = require('../controllers/productController')
const userController     = require('../controllers/userController')
const categoryController = require('../controllers/categoryController')
const orderController    = require('../controllers/orderController')
const auth   = require('../middlewares/auth')
const upload = require('../middlewares/upload')
const router = express.Router()

/* Rutas */
/* Rutas de productos */
    //ruta para obtener todos los productos:
    router.get('/products', productController.getAllProducts)
    //ruta para obtener producto por id:
    router.get('/product/:productId', productController.getProduct)
    //Ruta para insertar un producto por ID:
    router.post('/product',upload.single('image'), productController.insertProduct)
    //ruta para Actualizar un  Producto:
    router.put('/product/:productId',upload.single('image'), productController.updateProduct)
    //ruta para eliminar el producto.
    router.delete('/product/:productId', productController.deleteProduct)

/* Rutas para categorías */
    //ruta para obtener todas las categorias:
    router.get('/categories', categoryController.getAllCategories)
    //ruta para obtener categoría por id:
    router.get('/category/:categoryId', categoryController.getCategory)
    //Ruta para insertar una categoría por ID:
    router.post('/category', categoryController.insertCategory)
    //ruta para Actualizar una categoría:
    router.put('/category/:categoryId', categoryController.updateCategory)
    //ruta para eliminar una categoría.
    router.delete('/category/:categoryId', categoryController.deleteCategory)


/* Rutas para ordenes */
    //ruta para obtener todas las órdenes:
    router.get('/orders', orderController.getAllOrders)
    //ruta para obtener orden por id:
    router.get('/order/:orderId', orderController.getOrder)
    //Ruta para insertar una orden por ID:
    router.post('/order', orderController.insertOrder)
    //ruta para Actualizar una orden:
    router.put('/order/:orderId', orderController.updateOrder)
    //ruta para eliminar una orden.
    router.delete('/order/:orderId', orderController.deleteOrder)

/* Rutas de usuario */
    /* Registro de ususarios */
    router.post('/signUp', userController.signUp)
    /* Logeo de usuarios */
    router.post('/signIn', userController.signIn)

module.exports = router