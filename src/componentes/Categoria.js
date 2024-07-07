import React from 'react'
import Video from './Video';

function Categoria(props) {

  const { titulo, color } = props.datos;
  const { videos, eliminarVideo, editarVideo } = props;

  const estiloTitulo = {
    backgroundColor: color
  }

  return <>
    {
      videos.length > 0 &&
      <section className='contenedor-categoria'>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="videos">
          {
            videos.map((video, index) => <Video
              datos={video}
              key={index}
              color={color}
              eliminarVideo={eliminarVideo}
              editarVideo={editarVideo}
            />)
          }
        </div>
      </section>
    }
  </>
    
  
}

export default Categoria;