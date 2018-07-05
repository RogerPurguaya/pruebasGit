'use strict'

const Order = require('../models/order')

function insertOrder(req, res) {   
    let order = new Order({
        ...req.body
    })
    order.save((err, order) => {
        if (err) { throw err; res.status(500).send({error: err}) }
        else {
            res.status(201).send({ order, message: 'created success'})
        }
    })
}

function getOrder(req, res) {
    let orderId = req.params.orderId
    /* Order.findById(orderId, (err, order) => {
        if (err) res.status(500).send('Error al realizar la petición')
        if (!order) res.status(404).send('El producto no existe')
        res.status(200).send({ order })
    }) */
    Order.findById(orderId)
    .populate({
        path: 'products user',
    })
    .exec((err, order) => {
        if (err) res.status(500).send('Error al realizar la petición')
        if (!order) res.status(404).send('La orden no existe')
        res.status(200).send({ order })
    })
}

function getAllOrders(req, res) {
    /* Order.find({}, (err, orders) => {
        if (err) res.status(500).send('Hubo un error con la consulta.')
        if (!orders) res.status(200).send('no se encontraron productos.')
        res.status(200).send({ orders })
    }) */
    Order.find()
    .populate({
        path: 'products user',
    })
    .exec((err, orders) => {
        if (err) res.status(500).send('Error al realizar la petición')
        if (!orders) res.status(404).send('La orden no existe')
        res.status(200).send({ orders })
    })
}

function updateOrder(req, res) {
    let orderId = req.params.orderId
    let updateOrder = {
        ...req.body
    }
    Order.findByIdAndUpdate(orderId, updateOrder, (err, oldOrder) => {
        if (err) res.status(500).send('Error al ejecutar la petición. ' + err)
        if (!oldOrder) res.status(404).send('Error al encontrar el producto')
        res.status(200).send({oldOrder, message: 'product updated success!'})
    })
}

function deleteOrder(req, res) {
    let orderId = req.params.orderId
    Product.findByIdAndRemove(orderId, (err, deletedOrder) => {
        if (err) res.status(500).send('Ocurrio un error al eliminar')
        if (!deletedOrder) res.status(404).send('no se encontraron datos')//??
        res.status(200).send({deletedOrder, message: 'Eliminado con éxito.'})
    })
}

module.exports = {
    insertOrder,
    getOrder,
    getAllOrders,
    updateOrder,
    deleteOrder
}