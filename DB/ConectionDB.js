const mongoose = require('mongoose');

let conexion = 'mongodb+srv://Admin:Admin123@cluster0.ioomey0.mongodb.net/?retryWrites=true&w=majoritya'

mongoose.connect(conexion)
    .then(event=> console.log("conectado a mongo"))
    .catch(error=> console.log(error))
module.exports = mongoose
