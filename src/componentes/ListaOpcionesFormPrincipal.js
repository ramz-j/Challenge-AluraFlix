import React, { useState } from 'react'
import "../estilos/ListaOpcionesFormPrincipal.css";

const ListaOpcionesFormPrincipal = (props) => {
  
  const manejarCambio = (e) => {
    props.setCategoria(e.target.value);
  }

  return (
    <div className='lista-opciones-form-principal'>
      <label>Categoria</label>
      <select value={props.valor} onChange={manejarCambio}>
        {
          props.categorias.map((categoria, index) =>
            <option key={index} value={categoria}>
              {categoria}
            </option>
          )
        }
      </select>
    </div>
  )
}

export default ListaOpcionesFormPrincipal;