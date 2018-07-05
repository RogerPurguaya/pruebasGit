﻿'use strict'
//imports 
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const hbs = require('express-handlebars')
const router = require('./routes/routes')

//parsea el cuerpo de las peticiones HTTP:
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname : '.hbs'
}))

app.set('view engine','.hbs')
/* app.set('views', './vistas')
app.set('default', './vistas/layouts')  posterior corrección*/
const cors = require('cors')
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
//integra las rutas?
app.use('/api',router)

//rutas extras:
app.use('/login', (req, res) => {
    res.render('login')
})

app.use('/prueba', (req, res) => {
    res.render('productos')
})

module.exports = app
    
