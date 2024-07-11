import { useState } from "react";
import "../estilos/ListaOpciones.css"

const ListaOpciones = (props) => {

  const [nuevoValor, setNuevoValor] = useState(props.valor);
  
  const manejarCambio = (e) => {
    setNuevoValor(e.target.value);
    props.setCategoria(setNuevoValor);
  }

  return (
    <div className="lista-opciones">
        <label>Categoria</label>
        <select value={nuevoValor} onChange={manejarCambio}>
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