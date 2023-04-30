const mongoose = require("../DB/ConectionDB");

const usuarioSquema = mongoose.Schema({
        cedula:{
            type:'string',
            required: true,
            unique: true
        },
        nombre:{
            type:'string',
            required:true
        },
        apellido:{
            type:'string',
            required:true
        },
        direccion:{
            type:'string'
        },
        correo:{
            type:'string'
        },
        telefono:{
            type:'string'
        },
        genero:{
            type:'string',
            required:true
        },
        fecha_nacimiento:{
            type:'Date',
            required:true
        },
        estado:{
            type:'string',
            required:true
        },
        rol:{
            type:'string',
            required:true
        }
        
    },{
        collection: "Usuarios",
        versionKey: false
    }
);

module.exports = mongoose.model('Usuarios',usuarioSquema);