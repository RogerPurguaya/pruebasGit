'use strict'

const Product = require('../models/product')
const { parseImagePath } = require('../services/service')

function insertProduct(req, res) {
   
    let product = new Product({
        ...req.body
    })
    if (req.file) {
        product.image = parseImagePath(req.file.path)
    }
    product.save((err, product) => {
        if (err) { throw err; res.status(500).send({error: err}) }
        else {
            res.status(201).send({ product, message: 'created success'})
        }
    })
}

function getProduct(req, res) {
    let productId = req.params.productId
    Product.findById(productId, (err, product) => {
        if (err) res.status(500).send('Error al realizar la petición')
        if (!product) res.status(404).send('El producto no existe')
        res.status(200).send({ product })
    })
}

function getAllProducts(req, res) {
    Product.find({})
        .populate('category','name')
        .then((products) => {
        //if (err) return res.status(500).send('Hubo un error con la consulta.')
        if (!products) return res.status(200).send('no se encontraron productos.')

        res.status(200).send({ products })
    })
}

function updateProduct(req, res) {
    let productId = req.params.productId
    let updateProduct = {
        ...req.body
    }
    if (req.file) {
        updateProduct.image = parseImagePath(req.file.path)
    }
    Product.findByIdAndUpdate(productId, updateProduct, (err, updatedProduct) => {
        if (err) res.status(500).send('Error al ejecutar la petición. ' + err)
        if (!updatedProduct) res.status(404).send('Error al encontrar el producto')
        res.status(200).send({updatedProduct, message: 'product updated success!'})
    })
}

function deleteProduct(req, res) {
    let productId = req.params.productId
    Product.findByIdAndRemove(productId, (err, deletedProduct) => {
        if (err) res.status(500).send('Ocurrio un error al eliminar')
        if (!deletedProduct) res.status(404).send('no se encontraron datos')//??

        res.status(200).send({deletedProduct, message: 'Eliminado con éxito.'})
    })
}

module.exports = {
    insertProduct,
    getProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}