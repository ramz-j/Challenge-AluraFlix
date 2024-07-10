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

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviar = {
      titulo,
      categoria,
      imagen,
      video,
      descripcion
    }
    registrarVideo(datosEnviar)
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
            valor={categoria}
            setCategoria={setCategoria}
            categorias={props.categorias}
          />
          <CampoFormulario 
            titulo="Imagen"
            required
            valor={imagen}
            actualizarValor={setImagen}
          />
          <CampoFormulario 
            titulo="Video"
            required
            valor={video}
            actualizarValor={setVideo}
          />
          <CampoFormulario 
            titulo="Descripción"
            required
            valor={descripcion}
            actualizarValor={setDescripcion}
          />
          <div className="formulario-btns">
            <Boton type="submit">
              Guardar
            </Boton>
            <Boton>
              Limpiar
            </Boton>
          </div>
        </form>
      </section>
  )
}

export default FormularioModal;