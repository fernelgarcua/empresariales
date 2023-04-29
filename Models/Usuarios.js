const mongoose = require("../DB/ConectionDB");

const Usuarios = mongoose.Schema({

    usuario: {
        type: String,
        require: true,
        unique: true
    },
    clave: {
        type: String,
        require: true
    },
    rol: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    }
},{
    collection: 'Usuarios',
    versionKey: false
})

module.exports = mongoose.model('Usuarios', Usuarios)