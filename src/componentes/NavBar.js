import React from 'react'

function NavBar() {
  return (
    <div className='container-nav-bar'>
        <img src='/img/logo-main.png' />
        <div className='container-btn-nav-bar'>
            <button className='btn-nav-bar'>Inicio</button>
            <button className='btn-nav-bar'>Nuevo Video</button>
        </div>
    </div>
  )
}

export default NavBar