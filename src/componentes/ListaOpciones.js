import { useState } from "react";
import "../estilos/ListaOpciones.css"

const ListaOpciones = (props) => {
  
  const manejarCambio = (e) => {
    props.setCategoria(e.target.value);
  }

  return (
    <div className="lista-opciones">
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

export default ListaOpciones;