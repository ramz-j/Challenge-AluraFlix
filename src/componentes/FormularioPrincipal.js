import React, { useState } from 'react'
import CampoFormPrincipal from '../componentes/CampoFormPrincipal';
import ListaOpcionesFormPrincipal from '../componentes/ListaOpcionesFormPrincipal';
import BotonFormPrincipal from '../componentes/BotonFormPrincipal';

import "../estilos/FormularioPrincipal.css";
import { v4 as uuid } from 'uuid';


const FormularioPrincipal = (props) => {
  
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Front End");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const { registrarVideo } = props;

  const resetearValores = (e) => {
    console.log("Dentro de resetear valores");
    setTitulo('');
    setCategoria('Front End');
    setImagen('');
    setVideo('');
    setDescripcion('');
  }

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviar = {
      id: uuid(),
      titulo,
      categoria,
      imagen,
      video,
      descripcion
    }
    console.log("Manejar envio");
    registrarVideo(datosEnviar);

  }

  return (
    <div className='contenedor-formulario-principal'>
        <div className='encabezado'>
          <h1>Nuevo Video</h1>
          <p>Complete el formulario para crear una nueva tarjeta de video</p>
        </div>
        <form className='formulario-principal' onSubmit={manejarEnvio}>
          <div className='titulo-form'>
            <h2>Crear Tarjeta</h2>
          </div>
          <div className='contenedor-campos'>
            <CampoFormPrincipal 
              titulo="Titulo"
              placeholder="ingrese el título"
              required
              valor={titulo}
              setValor={setTitulo}
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
              setValor={setImagen}
            />
            <CampoFormPrincipal 
              titulo="Video"
              placeholder="ingrese el enlace del video"
              required
              valor={video}
              setValor={setVideo}
            />
            <CampoFormPrincipal 
              titulo="Descripción"
              placeholder="¿de qué trata este vídeo?"
              required
              valor={descripcion}
              setValor={setDescripcion}
            />
          </div>   
          <div className='contenedor-botones'>
            <BotonFormPrincipal type="submit">
              Guardar
            </BotonFormPrincipal>
            <BotonFormPrincipal type="reset" resetearValores={resetearValores} >
              Limpiar
            </BotonFormPrincipal>
          </div>      
        </form>
    </div>
  )
}

export default FormularioPrincipal;