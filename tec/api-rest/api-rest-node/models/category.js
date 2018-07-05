'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = Schema({
    name : {type: String, require: true, min: 1, max: 30},
    description : {type: String, default: 'not available', min: 1, max: 50},
}, { timestamps: true })

module.exports = mongoose.model('Category', categorySchema)