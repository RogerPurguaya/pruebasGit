'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = Schema({
    user: {type: Schema.Types.ObjectId, require: true, ref: 'User'},
    products : [{type: Schema.Types.ObjectId, ref: 'Product'}],
    payment : {type: String, default: 'bank_transfer'},
    totalPrice : {type: Number, default: 0},
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)