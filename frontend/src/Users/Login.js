import React from 'react'
import { getListaUsuarios } from '../Api/UsuariosApi'

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
    <div>
        <button onClick={ingresar}>Prueba</button>
    </div>
  )
}

export default Login
