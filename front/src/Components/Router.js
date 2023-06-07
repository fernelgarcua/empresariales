import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Usuario from '../Usuario/Usuario'
import FormUsuarios from '../Usuario/FormUsuarios'
import Prueba from '../Usuario/Prueba'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Usuario' element={<Usuario/>}></Route>
            <Route path='/FormUsuario' element={<FormUsuarios/>}></Route>
            <Route path='/Prueba' element={<Prueba/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
