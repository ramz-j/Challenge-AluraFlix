import React from 'react';
import FormularioPrincipal from '../componentes/FormularioPrincipal';
import Header from '../componentes/Header';
import { v4 as uuid } from 'uuid';


const AgregarVideo = () => {



  const categorias = [
    {
      id: uuid(),
      titulo: "Front End",
      color: "#6BD1FF"
    },
    {
      id: uuid(),
      titulo: "Back End",
      color: "#00C86F"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      color: "#FFBA05"
    }
  ]

  return (
    <div>
      <Header color="rgba(0, 0, 0, 0.97)" />

      <FormularioPrincipal 
        categorias={categorias.map((categoria) => categoria.titulo)}
      />

    </div>
  )
}

export default AgregarVideo