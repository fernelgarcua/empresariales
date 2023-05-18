const mongoose = require("../DB/ConectionDB");
const usuarios = require("./usuarios");

const ArticulosShema = mongoose.Schema({
        nombre_Articulos:{
            type:'string',
            required:true
        },
        direccion:{
            type:'string'
        },
        capacidad:{
            type:'number'
        },
        telefono:{
            type:'string'
        },

        usuarios:[{type:mongoose.Schema.Types.ObjectId,ref:"Usuarios"}]
              
    },{
        collection: "Bodegas",
        versionKey: false
    }
);

module.exports = mongoose.model('Bodegas',ArticulosShema);