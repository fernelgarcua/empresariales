const express = require('express');
const Bodegas = require('../models/Bodegas');
const Usuarios = require('../models/usuarios');
const BodegasRouter = express.Router();


//Listar Bodegas
BodegasRouter.get("/", (req,res)=>{
    Bodegas.find()
        .then(datos => res.json({Bodegas:datos}))
        .catch(error=>res.json({mensaje:error}))
});

//Obtener Bodega por id
BodegasRouter.get("/:id", (req,res)=>{
    Bodegas.findById({_id: req.params.id})
        .then(datos=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});

//Guardar Bodega
BodegasRouter.post("/", async(req,res)=>{
    console.log(req.body);
    //conexión con usuario    
    console.log(usuario);
    const Bodega = new Bodegas(req.body);
    Bodega.save()
    .then(data=> {
        console.log(data)
        res.json(data)})
    .catch(error=>res.json({mensaje:error}))
})

//Modificar Bodega
BodegasRouter.patch("/:id", (req,res)=>{
    const Bodega = new BodegasRouter(req.body);
    Bodegas.updateOne({_id: Bodega._id}, Bodega)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje:error}))

})

//Eliminar Bodega
BodegasRouter.delete("/:id", (req,res)=>{
    Bodegas.deleteOne({_id: req.params.id})
        .then(datos=> res.json(datos))
        .catch(error=> res.json({mensaje:error}))
});


module.exports = BodegasRouter;