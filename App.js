const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UsuariosRouter = require('./routes/UsuariosRouter');
const BodegasRouter = require('./routes/BodegasRouter');
const App= express();

App.use(cors());
App.use(bodyParser.json());

//Usuarios
App.use("/Usuarios", UsuariosRouter);

//Bodegas
App.use("/Bodegas", BodegasRouter);

//Demas Modelos

const PORT = process.env.PORT || 4000;
App.listen(PORT);