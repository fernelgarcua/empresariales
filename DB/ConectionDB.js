const mongoose = require('mongoose');

let conexion ='mongodb+srv://fernelgarcia91:fernelgarcia91@cluster0.rx1xgqo.mongodb.net/' 
//mongosh "mongodb+srv://cluster0.0rag2qq.mongodb.net" --apiVersion 1 --username Admin
//mongodb+srv://Admin:Admin123@cluster0.0rag2qq.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(conexion)
    .then(event=> console.log("conectado a mongo"))
    .catch(error=> console.log(error))
module.exports = mongoose