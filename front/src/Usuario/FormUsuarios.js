import React, { useEffect, useState } from 'react';
import { agregarUsuario } from '../Api/UsuariosApi';
import { useNavigate } from "react-router-dom";
//import Navegador from '../Components/Navegador'

function FormUsuario() {

const navigate=useNavigate()  
const [usuario,setUsuario]= useState({
            
            cedula:"",
            nombre:"",
            apellido:"",
            direccion:"",
            correo:"",
            telefono:"",
            genero:"",
            fecha_nacimiento:"",
            estado:"",
            rol:"",
            password:""
})
const handleChange=(e)=>{
    setUsuario({
        ...usuario, [e.target.name] : e.target.value
    })
}

const handleSubmit = async e => {
  e.preventDefault()

  const response = await agregarUsuario(usuario)

  navigate("/Usuario")
}

/* useEffect(() =>{
  if(setUser)
    setUsuario(setUser)
}, [setUser]) */

  return (
      <div>

        <div className="col-xxl" id="agregarUsuario" >
                  <div className="card mb-4">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="mb-0">Agregar Usuario</h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Cedula</label>
                          <div className="col-sm-10">
                            <input 
                              type="text"
                              className="form-control"
                              id="cedula"
                              name="cedula"
                              placeholder="Digite el nombre del Usuario"
                              onChange={handleChange} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Nombre</label>
                          <div className="col-sm-10">
                            <input 
                              type="text"
                              className="form-control"
                              id="nomUsuario"
                              name="nombre"
                              placeholder="Digite el nombre del Usuario"
                              onChange={handleChange} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Apellidos</label>
                          <div className="col-sm-10">
                            <input
                             type="text"
                              className="form-control"
                              id="apellido"
                              name="apellido"
                              placeholder="Digite el apellido del Usuario"
                              onChange={handleChange} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Fecha de nacimiento</label>
                          <div className="col-sm-10">
                            <input 
                              type="date"
                              className="form-control" 
                              id="fecha_nacimiento" 
                              name="fecha_nacimiento" 
                              placeholder="Digite la fecha de nacimiento del Usuario" 
                              onChange={handleChange} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Dirección</label>
                          <div className="col-sm-10">
                            <input 
                              type="text" 
                              className="form-control" 
                              id="direccion" 
                              name="direccion" 
                              placeholder="Digite la dirección del Usuario" 
                              onChange={handleChange} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Correo</label>
                          <div className="col-sm-10">
                            <input 
                              type="text" 
                              className="form-control" 
                              id="correo" 
                              name="correo" 
                              placeholder="Digite el correo del Usuario" 
                              onChange={handleChange} />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Telefono</label>
                          <div className="col-sm-10">
                            <input 
                              type="text" 
                              className="form-control" 
                              id="telefono" 
                              name="telefono" 
                              placeholder="Digite el telefono del Usuario" 
                              onChange={handleChange} />
                          </div>
                        </div>
                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Genero</label>
                        <div className="col-sm-10">
                        <select 
                          className="form-select" 
                          id="genero" 
                          name="genero" 
                          onChange={handleChange}>
                          <option selected="">Seleccionar Opción</option>
                          <option value="Femenino">Femenino</option>
                          <option value="Masculino">Masculino</option>
                        </select>
                        </div>
                      </div>
                      <div className="row mb-3">
                          <label className="col-sm-2 col-form-label">Contraseña</label>
                          <div className="col-sm-10">
                            <input 
                              type="password" 
                              className="form-control" 
                              id="password" 
                              name="password" 
                              placeholder="Digite la contraseña del Usuario" 
                              onChange={handleChange} />
                          </div>
                        </div>
                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Rol</label>
                        <div className="col-sm-10">
                        <select 
                          className="form-select" 
                          id="rol" 
                          name="rol" 
                          onChange={handleChange}>
                          <option selected="">Seleccionar Opción</option>
                          <option value="administrador">Administrador</option>
                          <option value="ponente">Ponente</option>
                          <option value="participante">Participante</option>
                        </select>
                        </div>
                      </div>
                        <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Entidad del que proviene</label>
                        <div className="col-sm-10">
                        
                        <input
                             type="text"
                              className="form-control"
                              id="estado"
                              name="estado"
                              placeholder="Digite de que entidad proviene"
                              onChange={handleChange} />
                        </div>
                      </div>
                        <div className="row justify-content-end">
                          <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Guardar</button>
                            <a href="/Usuario" className="btn btn-danger">Cancelar</a>
                          </div>
                          </div>
                      </form>
                    </div>
                  </div>
            </div>
            </div>

  )
}

export default FormUsuario;
