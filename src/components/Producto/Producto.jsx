import React from 'react'
import './Producto.css'

const Producto = ({nombre, precio}) => {
  return (
    <div>
      <h2>MI PRODUCTO</h2>
      <p>Nombre: {nombre} </p>
      <p>Precio: {precio} </p> 
      <button>Agregar al carrito </button>
    </div>
  )
}

export default Producto
