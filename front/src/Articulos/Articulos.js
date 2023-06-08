import React, { useState } from 'react'
import { getListaArticulos,eliminarArticulo } from '../Api/ArticuloApi'
import TablaArticulos from './TablaArticulos'
import Navegador from '../Components/Navegador'
import { useEffect } from 'react'

function Articulo() {
    const [Articulos,SetArticulos] = useState([])

    const Listar = () =>{
      getListaArticulos().then((data)=>{SetArticulos(data)}).catch((err)=>{console.log(err)})
    }

    useEffect(()=>{
      Listar()
    },[])

    const eliminar = (id) => {
      console.log("Id:" + id)
      eliminarArticulo(id).then((data)=> {
        console.log(data)
        if(data.deletedCount === 1)
        Listar();
      }).catch((err) => {console.log(err)})
    }

    const guardar = (Articulo) => {
      if (Articulo._id === null){
        console.log("hola")
        //agregarArticulo(Articulo).then((data) => {Listar()}).catch((err) => {console.log(err)})
      }else{
        //actualizarArticulo(Articulos).then((data) => Listar()).catch((err) => {console.log(err)})
      }
      setMostrarLista(true);
    }
  
  const [mostrarLista,setMostrarLista] = useState(true)
    
   const verLista = (e) =>{
      if(mostrarLista){
        setMostrarLista(false)
      }else{
        setMostrarLista(true)
          SetArticulos({
            id_: null,
            codigo_Articulos:"",
            nombre_Articulos:"",
            descripcion_Articulos:"",
            cantidad_Articulos:"",
            fecha_Creacion_Articulo:"",
            Lugar_Creacion:"",
            estado_Articulo:"",
            color:"",
            precio:"",
          })
      }
    }

  return (
    <div>
      <Navegador/>
      <TablaArticulos Articulos = {Articulos} onDelete = {eliminar} onView={verLista}/> 
    </div>
  )
}

export default Articulo;
