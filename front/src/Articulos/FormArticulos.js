import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {agregarArticulo} from '../Api/ArticuloApi'

function FormArticulos() {
  const navigate=useNavigate()  
    const [Articulo,setArticulo]= useState({
                
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
    const handleChange=(e)=>{
        setArticulo({
            ...Articulo, [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = async e => {
      e.preventDefault()
    
      const response = await agregarArticulo(Articulo)
    
      navigate("/Articulos")
    }
    
    /* useEffect(() =>{
      if(setUser)
        setArticulo(setUser)
    }, [setUser]) */
    
  return (
          <div>
    
            <div className="col-xxl" id="agregarArticulo" >
                      <div className="card mb-4">
                        <div className="card-header d-flex align-items-center justify-content-between">
                          <h5 className="mb-0">Agregar Articulo</h5>
                        </div>
                        <div className="card-body">
                          <form onSubmit={handleSubmit}>
                          <div className="row mb-3">
                              <label className="col-sm-2 col-form-label">Código Articulo</label>
                              <div className="col-sm-10">
                                <input 
                                  type="text"
                                  className="form-control"
                                  id="Código"
                                  name="Código"
                                  placeholder="Digite el Código del Articulo"
                                  onChange={handleChange} />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label className="col-sm-2 col-form-label">Nombre</label>
                              <div className="col-sm-10">
                                <input 
                                  type="text"
                                  className="form-control"
                                  id="nombre"
                                  name="nombre"
                                  placeholder="Digite el nombre del Articulo"
                                  onChange={handleChange} />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label className="col-sm-2 col-form-label">Descripcion</label>
                              <div className="col-sm-10">
                                <input
                                 type="text"
                                  className="form-control"
                                  id="apellido"
                                  name="apellido"
                                  placeholder="Digite el apellido del Articulo"
                                  onChange={handleChange} />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label className="col-sm-2 col-form-label">cantidad</label>
                              <div className="col-sm-10">
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="cantidad" 
                                  name="cantidad" 
                                  placeholder="Digite la dirección del Articulo" 
                                  onChange={handleChange} />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label className="col-sm-2 col-form-label">Fecha de creacion</label>
                              <div className="col-sm-10">
                                <input 
                                  type="date"
                                  className="form-control" 
                                  id="fecha_nacimiento" 
                                  name="fecha_nacimiento" 
                                  placeholder="Digite la fecha de nacimiento del Articulo" 
                                  onChange={handleChange} />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label className="col-sm-2 col-form-label">Lugar</label>
                              <div className="col-sm-10">
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="Lugar" 
                                  name="Lugar" 
                                  placeholder="Digite el Lugar del Articulo" 
                                  onChange={handleChange} />
                              </div>
                            </div>
                            <div className="row mb-3">
                            <label className="col-sm-2 col-form-label">Estado</label>
                            <div className="col-sm-10">
                            <select 
                              className="form-select" 
                              id="estado" 
                              name="estado" 
                              onChange={handleChange}>
                              <option selected="">Seleccionar Opción</option>
                              <option value="Nuevo">Nuevo</option>
                              <option value="Usado">Usado</option>
                            </select>
                            </div>
                          </div>
                            <div className="row mb-3">
                              <label className="col-sm-2 col-form-label">Color</label>
                              <div className="col-sm-10">
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="Color" 
                                  name="Color" 
                                  placeholder="Digite el Color del Articulo" 
                                  onChange={handleChange} />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label className="col-sm-2 col-form-label">Precio</label>
                              <div className="col-sm-10">
                                <input 
                                  type="text" 
                                  className="form-control" 
                                  id="Precio" 
                                  name="Precio" 
                                  placeholder="Digite el Precio del Articulo" 
                                  onChange={handleChange} />
                              </div>
                            </div>
                            <div className="row justify-content-end">
                              <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Guardar</button>
                                <a href="/Articulos" className="btn btn-danger">Cancelar</a>
                              </div>
                              </div>
                          </form>
                        </div>
                      </div>
                </div>
                </div>
    
      )
  }

export default FormArticulos
