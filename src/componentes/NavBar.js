import React from 'react'
import { Link } from "react-router-dom"

function NavBar(props) {
  console.log(props.color)
  const fondo = {
    backgroundColor: props.color
  }

  return (
    <div style={fondo} className='container-nav-bar'>
        <img src='/img/logo-main.png' />
        <div className='container-btn-nav-bar'>
          <Link to="/"><button style={fondo} className='btn-nav-bar'>Inicio</button></Link>
          <Link to="/nuevo-video"><button style={fondo} className='btn-nav-bar'>Nuevo Video</button></Link>
        </div>
    </div>
  )
}

export default NavBar