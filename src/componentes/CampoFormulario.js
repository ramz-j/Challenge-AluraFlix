import { useState } from "react";
import "../estilos/CampoFormulario.css"

const CampoFormulario = (props) => {
  
  const { type = "text" } = props;
  
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  }

  return (
    <div className={`campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
  )
}

export default CampoFormulario;