'use strict'

const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const bcrypt   = require('bcrypt-nodejs')
const crypto   = require('crypto')

const UserSchema = new Schema ({
    email  : { type: String, unique: true, lowercase: true, require: true },
    name : { type: String, default: 'username'},
    avatar : { type: String },
    password: { type: String, select: false, require: true },
    lastLogin : { type: Date, default: Date.now() },
},{ timestamps: true})

UserSchema.pre('save', function(next) {
    let user = this
    if (!user.isModified('password')) {
        return next()
    }else{
        bcrypt.genSalt(10, (err, salt) => {
            if(err) return next(err)
            bcrypt.hash(user.password, salt, null, (err, hash) => {
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    }
})

UserSchema.methods.gravatar = function (size) {
    if (!size) { size = 200; }
    if (!this.email) return `https://gravatar.com/avatar/?s=2006d=retro`
    const md5 = crypto.createHash('md5').update(this.email).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=2006d=retro`
}

//método para comparar las contraseñas:
UserSchema.methods.comparePassword = function (candidatePassword,hash,cb) {
    bcrypt.compare(candidatePassword,hash, (err, isMatch) => {   
        cb(err, isMatch) 
        })  
      }

module.exports = mongoose.model('User', UserSchema)