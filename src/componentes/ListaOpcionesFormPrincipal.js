import React from 'react'
import "../estilos/ListaOpcionesFormPrincipal.css";

const ListaOpcionesFormPrincipal = (props) => {


  return (
    <div className='lista-opciones-form-principal'>
      <label>Categoria</label>
      <select value={props.valor}>
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