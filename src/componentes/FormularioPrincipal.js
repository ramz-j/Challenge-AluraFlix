import React, { useState } from 'react'
import CampoFormPrincipal from '../componentes/CampoFormPrincipal';
import ListaOpcionesFormPrincipal from '../componentes/ListaOpcionesFormPrincipal';
import BotonFormPrincipal from '../componentes/BotonFormPrincipal';

import "../estilos/FormularioPrincipal.css";

const FormularioPrincipal = (props) => {
  
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");


  return (
    <div className='contenedor-formulario-principal'>
        <div className='encabezado'>
          <h1>Nuevo Video</h1>
          <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </div>
        <form className='formulario-principal'>
          <div className='titulo-form'>
            <h2>Crear Tarjeta</h2>
          </div>            
          <CampoFormPrincipal 
            titulo="Titulo"
            placeholder="ingrese el título"
            required
            valor={titulo}
            setTitulo={setTitulo}
          />
          <ListaOpcionesFormPrincipal 
            valor={categoria}
            setCategoria={setCategoria}
            categorias={props.categorias}
          />
          <CampoFormPrincipal 
            titulo="Imagen"
            placeholder="el enlace es obligatorio"
            required
            valor={imagen}
            setTitulo={setImagen}
          />
          <CampoFormPrincipal 
            titulo="Video"
            placeholder="ingrese el enlace del video"
            required
            valor={video}
            setTitulo={setVideo}
          />
          <CampoFormPrincipal 
            titulo="Descripción"
            placeholder="¿de qué trata este vídeo?"
            required
            valor={descripcion}
            setTitulo={setDescripcion}
          />
          <BotonFormPrincipal type="submit">
            Guardar
          </BotonFormPrincipal>
          <BotonFormPrincipal>
            Limpiar
          </BotonFormPrincipal>
        </form>
    </div>
  )
}

export default FormularioPrincipal;