import { useState } from "react"
import "../estilos/FormularioModal.css";

import CampoFormulario from "./CampoFormulario";
import ListaOpciones from "./ListaOpciones";
import Boton from "./Boton";

const FormularioModal = (props) => {

  const { registrarVideo, cerrarEditar } = props;
  const { titulo, categoria, imagen, video, descripcion} = props.videoEditar;

  const [tituloEditado, setTitulo] = useState(titulo);
  const [categoriaEditado, setCategoria] = useState(categoria);
  const [imagenEditado, setImagen] = useState(imagen);
  const [videoEditado, setVideo] = useState(video);
  const [descripcionEditado, setDescripcion] = useState(descripcion);

  const resetearValores = (e) => {
    setTitulo(titulo);
    setCategoria(categoria);
    setImagen(imagen);
    setVideo(video);
    setDescripcion(descripcion);
  }

  const manejarEnvio = (e) => {
    // console.log(tituloEditado, categoriaEditado,imagenEditado, videoEditado,descripcionEditado);
    e.preventDefault();
    let datosEnviar = {
      id: props.videoEditar,
      titulo: tituloEditado,
      categoria: categoriaEditado,
      imagen: imagenEditado,
      video: videoEditado,
      descripcion: descripcionEditado
    }
    props.actualizarVideo(datosEnviar);
  }

  return (
    <section className="formulario-modal" onSubmit={manejarEnvio} >
      <span onClick={() => cerrarEditar()} class="material-symbols-outlined">
        cancel
      </span>
      <form className="formulario">
          <h2>Editar Card:</h2>
          <CampoFormulario
            titulo="Titulo"
            required
            valor={tituloEditado}
            actualizarValor={setTitulo}
          />
          
          <ListaOpciones 
            valor={categoriaEditado}
            setCategoria={setCategoria}
            categorias={props.categorias}
          />
          <CampoFormulario 
            titulo="Imagen"
            required
            valor={imagenEditado}
            actualizarValor={setImagen}
          />
          <CampoFormulario 
            titulo="Video"
            required
            valor={videoEditado}
            actualizarValor={setVideo}
          />
          <CampoFormulario 
            titulo="Descripción"
            required
            valor={descripcionEditado}
            actualizarValor={setDescripcion}
          />
          <div className="formulario-btns">
            <Boton type="submit">
              Guardar
            </Boton>
            <Boton resetearValores={resetearValores}>
              Limpiar
            </Boton>
          </div>
        </form>
      </section>
  )
}

export default FormularioModal;