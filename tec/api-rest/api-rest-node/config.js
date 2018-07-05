module.exports = {
    port : process.env.PORT || 8000 ,
    db   : process.env.MONGODB || 'mongodb://localhost:27017/ymple',
    SECRET_TOKEN : 'miclavetokenXD',
    DOMAIN_NAME: process.env.DOMAIN_NAME || 'http://localhost:3000'
}