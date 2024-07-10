import React from 'react';
import NavBar from './NavBar';

import '../estilos/NavBar.css';


function Header(props) {
  return (
    <header className='header' >
        <NavBar color={props.color} />
    </header>
  )
}

export default Header;