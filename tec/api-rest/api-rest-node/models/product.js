'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
    name  : {type: String, require: true},
    stock : {type: Number, require: true},
    price : {type: Number, require: true},
    category : {type: Schema.Types.ObjectId, ref: 'Category'},
    description: {type: String, default: 'not available'},
    image: {type: String, default: 'not found'}
},{ timestamps: true})
 
module.exports = mongoose.model('Product', productSchema)