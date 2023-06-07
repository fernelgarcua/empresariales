import React, { useState, useEffect } from 'react'
import { getListaUsuarios,eliminarUsuario, agregarUsuario, actualizarUsuario } from '../Api/UsuariosApi'
import TablaUsuarios from './TablaUsuarios'
import Navegador from '../Components/Navegador'
import Prueba from './Prueba'


function Usuario() {
    const [Usuarios,SetUsuarios] = useState([])
    const [mostrarLista,setMostrarLista] = useState(true)

    function prueba  (usuario) {
        console.log("usuarios --------->",usuario);
    }
    
    const Listar = () =>{
      getListaUsuarios().then((data)=>{SetUsuarios(data)}).catch((err)=>{console.log(err)})
    }

    Listar()

    const guardar = (usuario) => {
      if (usuario._id === null){
        console.log("hola")
        //agregarUsuario(usuario).then((data) => {Listar()}).catch((err) => {console.log(err)})
      }else{
        //actualizarUsuario(usuarios).then((data) => Listar()).catch((err) => {console.log(err)})
      }
      setMostrarLista(true);
    }

    const eliminar = (id) => {
      console.log("Id:" + id)
      eliminarUsuario(id).then((data)=> {
        console.log(data)
        if(data.deletedCount === 1)
        Listar();
      }).catch((err) => {console.log(err)})
    }


  

    
   const verLista = (e) =>{
      if(mostrarLista){
        setMostrarLista(false)
      }else{
        setMostrarLista(true)
          SetUsuarios({
            id_: null,
            Cedula:"",
            Nombre:"",
            Apellido:"",
            Dirección:"",
            correo:"",
            telefono:"",
            genero:"",
            fecha_nacimiento:"",
            estado:"",
            rol:"",
            Contraseña:"",
          })
      }
    }

  return (
    <div>
      <Navegador/>
      <TablaUsuarios Usuarios = {Usuarios} onDelete = {eliminar} onView={verLista}/> 
      {!mostrarLista && <div>
        <Prueba otro={prueba} />
        </div>}
    </div>
  )
}

export default Usuario;

