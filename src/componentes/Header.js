import React from 'react';
import NavBar from './NavBar';

import '../estilos/NavBar.css';


function Header(props) {
  return (
    <header className='header' >
        <NavBar color={props.color} elemento={props.elemento} />
    </header>
  )
}

export default Header;