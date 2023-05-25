import React from 'react'
import { getListaUsuarios } from '../Api/UsuariosApi'
import "./Login.css"
import RegistroUsuarios from './RegistroUsuarios'

function Login() {
    const ingresar = (e)=>{
    getListaUsuarios().then((data)=>{
        if (data == null){
          console.log("No existen datos")
        } else{
          console.log(data)
        }
    }
  )  
}

  return (
    <div className='Formulario'>
      <div className='Login-contener'>
        <h1>BIENVENIDO</h1>
        <input className='Input' placeholder='Usuario'></input>
        <input className='Input' placeholder='Contraseña'></input>
        <button onClick={ingresar}>INGRESAR</button>
        <br/>
        <span>Registrate <a href="./RegistroUsuarios">aquí</a> </span>
      </div>
    </div>
  )
}

export default Login
