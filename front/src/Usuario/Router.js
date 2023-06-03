import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Usuario from './Usuario'
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Usuario' element={<Usuario/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
