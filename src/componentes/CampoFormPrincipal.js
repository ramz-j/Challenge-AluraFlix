import React from 'react'
import '../estilos/CampoFormPrincipal.css';

const CampoFormPrincipal = (props) => {

  const { type = "text" } = props

  const manejarCambio = (e) => {
    props.setValor(e.target.value)
  }

  return (
    <div className='campo-formulario'>
        <label>{props.titulo}</label>
        <input
            placeholder={props.placeholder}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
  )
}

export default CampoFormPrincipal