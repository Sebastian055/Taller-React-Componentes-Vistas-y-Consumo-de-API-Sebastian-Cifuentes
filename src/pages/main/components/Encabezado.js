import React from 'react';
import { Link } from 'react-router-dom';

function Encabezado() {
  return (
    <header className="header">
      <h1>Mi Portafolio</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/acerca-de">Acerca de</Link>
        <Link to="/contacto">Contactactame</Link>
      </nav>
    </header>
  );
}

export default Encabezado;
