const mongoose = require('mongoose');

let conexion ='mongodb+srv://Admin:Admin123@cluster0.uxboe0m.mongodb.net/?retryWrites=true&w=majority' 

mongoose.connect(conexion)
    .then(event=> console.log("conectado a mongo"))
    .catch(error=> console.log(error))
module.exports = mongoose