'use strict'

const Category = require('../models/category')

function insertCategory(req, res) {
    let category = new Category({
        ...req.body
    })

    category.save((err, category) => {
        if (err) { throw err; res.status(500).send({error: err}) }
        else {
            res.status(201).send({ category, message: 'created category success!'})
        }
    })
}

function getCategory(req, res) {
    let categoryId = req.params.categoryId
    Category.findById(categoryId, (err, category) => {
        if (err) res.status(500).send('Server internal error.')
        if (!category) res.status(404).send('Category dont exists')
        res.status(200).send({ category })
    })
}

function getAllCategories(req, res) {
    Category.find({}, (err, categories) => {
        if (err) res.status(500).send('Hubo un error con la consulta.')
        if (!categories) res.status(200).send('no se encontraron productos.')
        
        res.status(200).send({ categories })
    })
}

function updateCategory(req, res) {
    let categoryId = req.params.categoryId
    let updateCategory = {
        ...req.body
    }

    Category.findByIdAndUpdate(categoryId, updateCategory, (err, updatedCategory) => {
        if (err) res.status(500).send('Error al ejecutar la petición. ' + err)
        if (!updatedCategory) res.status(404).send('Error al encontrar el producto')
        res.status(200).send({updatedCategory, message: 'category updated success!'})
    })
}

function deleteCategory(req, res) {
    let categoryId = req.params.categoryId
    Category.findByIdAndRemove(categoryId, (err, deletedCategory) => {
        if (err) res.status(500).send('Ocurrio un error al eliminar')
        if (!deletedCategory) res.status(404).send('no se encontraron datos')//??

        res.status(200).send({deletedCategory, message: 'Eliminado con éxito.'})
    })
}

module.exports = {
    insertCategory,
    getCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
}