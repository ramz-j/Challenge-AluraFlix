import { useState } from "react";
import "../estilos/CampoFormulario.css"

const CampoFormulario = (props) => {

  const [nuevoValor, setNuevoValor] = useState(props.valor);
  
  const { type = "text" } = props;
  
  const manejarCambio = (e) => {
    console.log(e.target.value);
    setNuevoValor(e.target.value);
    props.actualizarValor(setNuevoValor);
  }

  return (
    <div className={`campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            // placeholder={props.placeholder}
            required={props.required}
            value={nuevoValor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
  )
}

export default CampoFormulario;