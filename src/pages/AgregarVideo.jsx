import React, { useState, useEffect } from 'react';
import FormularioPrincipal from '../componentes/FormularioPrincipal';
import Header from '../componentes/Header';
import { v4 as uuid } from 'uuid';
import { crear } from "../api/api";
import { useNavigate } from "react-router-dom";


const AgregarVideo = () => {

  const navigate = useNavigate();

  const [video, setVideo] = useState([]);

  const registrarVideo = (video) => {
    console.log("Nuevo video ", video);
    crear("/videos", video);
    navigate("/");
  }

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
      <Header color="rgba(0, 0, 0, 0.97)" elemento="nuevo-video" />

      <FormularioPrincipal 
        categorias={categorias.map((categoria) => categoria.titulo)}
        registrarVideo={registrarVideo}
      />

    </div>
  )
}

export default AgregarVideo