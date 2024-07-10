import React from 'react';
import "../estilos/BotonFormPrincipal.css";

const BotonFormPrincipal = (props) => {
  return (
    <input type={props.type} className="boton-form-principal" value={props.children} />
  )
}

export default BotonFormPrincipal;