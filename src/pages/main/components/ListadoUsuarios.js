import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListadoUsuario() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('https://www.boredapi.com/api/activity') .catch(error => console.error('Error al obtener usuarios:', error));
  }, []);

  return (
    <div>
      <h3>Listado de Usuarios</h3>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListadoUsuario;
