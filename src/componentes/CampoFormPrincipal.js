import React from 'react'
import '../estilos/CampoFormPrincipal.css';

const CampoFormPrincipal = (props) => {
  return (
    <div className='campo-formulario'>
        <label>{props.titulo}</label>
        <input
            placeholder={props.placeholder}
        />
    </div>
  )
}

export default CampoFormPrincipal