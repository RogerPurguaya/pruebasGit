'use strict'

const jwt    = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

//crear un token de autentificación:
function createToken(usuario) {
    const payload = {
        sub: usuario._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix() //caduca dentro de 14 dias
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}


function decodeToken(token) {
    const decoded = new Promise((resolve, reject ) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN)

            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    mensaje: 'El token ha expirado'
                })
            }

            resolve(payload.sub)

        } catch (error) {
            reject({
                status: 500,
                mensaje: 'Token inválido'
            })
        }
    })
//retornamos la promesa:
    return decoded

}

//Método para parsear las rutas de las imágens subidas
function parseImagePath(path) {
    let parsedPath = path.split('\\')
    parsedPath[0] = config.DOMAIN_NAME
    return parsedPath.toString().replace(/,/g,'//')
  }
  
  //Método para obtener datos a exponer en el cliente (no sensibles)
  function getCleanUser(user) {
      const { password, __v, _id , ...exposedData } = user
      return exposedData
  }
  

module.exports = {
    createToken,
    decodeToken,
    parseImagePath,
    getCleanUser
}