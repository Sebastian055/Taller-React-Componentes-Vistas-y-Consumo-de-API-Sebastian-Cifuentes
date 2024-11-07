import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaAcercaDe from './pages/PaginaAcercaDe';
import PaginaContacto from './pages/home/Home';
import Encabezado from '../pages/PaginaContacto';
import PaginaInicial from './pages/PaginaInicial';


function App() {
  return (
    <Router>
      <Header />
      <nav> 
        <link to ="/"> Inicio</link>
        <link to ="/about">Acerca de</link>
        <link to ="/contact">Contactactame</link>
      </nav>
      <Routes>
        <Route path ="/" element = {<PaginaInicio />} />
        <Route path ="/" element = {<PaginaAcercaDe />} />
        <Route path ="/" element = {<PaginaContacto />} />  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
