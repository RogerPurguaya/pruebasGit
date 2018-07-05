'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services/service')

function signUp(req, res) {
    
    const user = new User({
        email : req.body.email,
        nombre : req.body.nombre,
        password : req.body.password
    })

    //asignamos el gravatar:
    user.avatar = user.gravatar()
    user.save( err => {
        if(err) return res.status(500).send('Error al crear el usuario '+ err)
        return res.status(201).send({ token: service.createToken(user),
                                      message: 'user created success!' })
    })   
}

function signIn(req, res) {

    let query = User.findOne({email: req.body.email})
    query.select('_id email password')
    query.exec((err, user) => {
        if(err) return res.status(500).send(err)
        if(!user) return res.status(403).send('User not found')

        user.comparePassword(req.body.password, user.password, (err,isMatch) => {
        if(err) {return res.status(500).send({mensaje:'Error al ingresar'})}
        if(!isMatch){return res.status(403).send({mensaje:'Credenciales incorrectas'})}
        
        req.user = user
        return res.status(200).send({
                    mensaje: 'Login success!',
                    token: service.createToken(user)
                })
        })
    })
}

module.exports = {
    signUp,
    signIn
}