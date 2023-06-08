import React from 'react'

function TablaArticulos(props) {
    const {Articulos,onDelete,onView} = props;
  return (
    <table className='table table-stripe'>
    <thead className='table-primary'>
    <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Cantidad</th>
        <th>Fecha</th>
        <th>lugar</th>
        <th>estado</th>
        <th>color</th>
        <th>precio</th>
        <th></th>
        <th></th>
    </tr>
    </thead>
    <tbody>
      {Articulos.map((Articulo)=>{
        return(<tr key={Articulos._id}>
          <td>{Articulo.codigo_Articulos}</td>
          <td>{Articulo.nombre_Articulos}</td>
          <td>{Articulo.descripcion_Articulos}</td>
          <td>{Articulo.cantidad_Articulos}</td>
          <td>{Articulo.fecha_Creacion_Articulo}</td>
          <td>{Articulo.Lugar_Creacion}</td>
          <td>{Articulo.estado_Articulo}</td>
          <td>{Articulo.color}</td>
          <td>{Articulo.precio}</td>
          <td>
          <button className='btn btn-warning'onClick={()=>{onView(Articulo)}}>Ver</button>
          </td>
          <td>
          <button className='btn btn-danger' onClick={()=>{onDelete(Articulo._id)}}>Eliminar</button>
          </td>
        </tr>)
      })}
    </tbody>
</table>
  )
}

export default TablaArticulos
