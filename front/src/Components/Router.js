import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Usuario from '../Usuario/Usuario'
import FormUsuarios from '../Usuario/FormUsuarios'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Usuario' element={<Usuario/>}></Route>
            <Route path='/FormUsuario' element={<FormUsuarios/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
