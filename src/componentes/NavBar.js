import React from 'react'
import { Link } from "react-router-dom"

function NavBar(props) {
  const fondo = {
    backgroundColor: props.color
  }

  return (
    <div style={fondo} className='container-nav-bar'>
        <img src='/img/logo-main.png' />
        <div className='container-btn-nav-bar'>
          <Link to="/"><button style={fondo}  className={`btn-nav-bar ${props.elemento === 'home' ? 'selected' : ''}`}>Inicio</button></Link>
          <Link to="/nuevo-video"><button style={fondo} className={`btn-nav-bar ${props.elemento === 'nuevo-video' ? 'selected' : ''}`}>Nuevo Video</button></Link>
        </div>
    </div>
  )
}

export default NavBar