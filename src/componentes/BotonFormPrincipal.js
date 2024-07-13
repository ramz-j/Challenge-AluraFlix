import React from 'react';
import "../estilos/BotonFormPrincipal.css";

const BotonFormPrincipal = (props) => {
  console.log(props);
  console.log(props.type);
  return (
    <input type={props.type} onClick={() => props.resetearValores()} className="boton-form-principal" value={props.children} />
  )
}

export default BotonFormPrincipal;