const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UsuariosRouter = require('./routes/UsuariosRouter');
const ArticulosRouter = require('./routes/ArticulosRouter')
const App= express();

App.use(cors());
App.use(bodyParser.json());

//Usuarios
App.use("/Usuarios", UsuariosRouter);

App.use("/Articulos", ArticulosRouter)

const PORT = process.env.PORT || 4000;
App.listen(PORT);