const express = require('express');
const Articulos = require('../models/Articulos');
const ArticulosRouter = express.Router();

//Listar Usuarios
ArticulosRouter.get("/", (req,res)=>{
    Articulos.find()
        .then(datos => res.json({Usuarios:datos}))
        .catch(error=>res.json({mensaje:error}))
});

//Obtener Usuario por id
ArticulosRouter.get("/:id", (req,res)=>{
    Articulos.findById({_id: req.params.id})
        .then(datos=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});

//Guardar Usuario
ArticulosRouter.post("/", (req,res)=>{
    console.log(req.body);
    const usuario = new Articulos(req.body);
    usuario.save()
    .then(data=> {
        console.log(data)
        res.json(data)})
    .catch(error=>res.json({mensaje:error}))
})

//Modificar Usuario
ArticulosRouter.patch("/:id", (req,res)=>{
    const usuario = new ArticulosRouter(req.body);
    Articulos.updateOne({_id: usuario._id}, usuario)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje:error}))

})

//Eliminar Usuario
ArticulosRouter.delete("/:id", (req,res)=>{
    Articulos.deleteOne({_id: req.params.id})
        .then(datos=> res.json(datos))
        .catch(error=> res.json({mensaje:error}))
});


module.exports = ArticulosRouter;
