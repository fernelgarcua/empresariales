const express = require('express')
const Usuarios = require('../Models/Usuarios')
const UsuariosRouter = express.Router();

UsuariosRouter.get("/", (req,res)=>{
    Usuarios.find()
    .then(datos=> res.json({Usuarios: datos}))
    .catch(error => res.json({mensaje: error}))
})

UsuariosRouter.get("/:id", (req,res)=>{
    Usuarios.findById({_id: req.params.id})
    .then(datos=> res.json(pos))
    .catch(error => res.json({mensaje: error}))
})

UsuariosRouter.patch("/",(req,res)=>{
    Usuarios = new Usuarios (req.body)
    Usuarios.updateOne 
})
module.exports = UsuariosRouter;