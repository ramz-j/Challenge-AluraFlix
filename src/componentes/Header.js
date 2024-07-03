import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import '../estilos/NavBar.css';
import '../estilos/Banner.css';

function Header() {
  return (
    <header className='header' >
        <NavBar />
        <Banner />
    </header>
  )
}

export default Header;