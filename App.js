const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const UsuariosRouter = require('./routes/AdministradorRouter')
const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use("/Usuarios", UsuariosRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT)