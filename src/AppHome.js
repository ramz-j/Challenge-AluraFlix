import Banner from './Banner';
import '../estilos/Banner.css';

import Categoria from './componentes/Categoria';
import Footer from './componentes/Footer';
import FormularioModal from './componentes/FormularioModal';


import './estilos/Categoria.css';

import { useState, useEffect } from 'react';
import { buscar } from "./api/api";
import { v4 as uuid } from 'uuid';


function App() {

  const [ mostrarFormulario, setMostrarFormulario ] = useState(false);

  const [videos, actualizarVideos] = useState([
    // {
    //   id: uuid(),
    //   titulo: "Cuando usar let, var y const",
    //   categoria: "Front End",
    //   imagen: "/img/cuando-usar-let-var-y-const.jpg",
    //   video: "https://www.youtube.com/watch?v=PztCEdIJITY"
    // },
    // {
    //   id: uuid(),
    //   titulo: "¿Qué es JavaScript?",
    //   categoria: "Front End",
    //   imagen: "/img/que-es-javascript.jpg",
    //   video: "https://www.youtube.com/watch?v=GJfOSoaXk4s"
    // },
    // {
    //   id: uuid(),
    //   titulo: "Equipo Front End",
    //   categoria: "Front End",
    //   imagen: "/img/equipo-front-end.jpg",
    //   video: "https://www.youtube.com/watch?v=rpvrLaBQwgg"
    // },
    // {
    //   id: uuid(),
    //   titulo: "Spring Framework. ¿Qué es?",
    //   categoria: "Back End",
    //   imagen: "/img/spring-framework-que-es.jpg",
    //   video: "https://www.youtube.com/watch?v=t-iqt1b2qqk"
    // },
    // {
    //   id: uuid(),
    //   titulo: "¿Qué es SQL y NOSQL?",
    //   categoria: "Back End",
    //   imagen: "/img/que-es-sql-y-nosql.jpg",
    //   video: "https://www.youtube.com/watch?v=cLLKVd5CNLc"
    // },
    // {
    //   id: uuid(),
    //   titulo: "Conoce los enum",
    //   categoria: "Back End",
    //   imagen: "/img/conoce-los-enum.jpg",
    //   video: "https://www.youtube.com/watch?v=EoPvlE85XAQ"
    // },
    // {
    //   id: uuid(),
    //   titulo: "¿Qué son las Soft Skills?",
    //   categoria: "Innovación y Gestión",
    //   imagen: "/img/que-son-las-soft-skills.jpg",
    //   video: "https://www.youtube.com/watch?v=vhwspfvI52k&t"
    // },
    // {
    //   id: uuid(),
    //   titulo: "7 Soft Skills más deseadas por las empresas",
    //   categoria: "Innovación y Gestión",
    //   imagen: "/img/las-7-softskills.jpg",
    //   video: "https://www.youtube.com/watch?v=YhR7Zp8NUzE&t"
    // },
    // {
    //   id: uuid(),
    //   titulo: "¿Qué son las metodologias ágiles?",
    //   categoria: "Innovación y Gestión",
    //   imagen: "/img/metodologias-agiles.jpg",
    //   video: "https://www.youtube.com/watch?v=6N3OkLCfK-0"
    // }
  ])

  const [videoEditar, setVideoEditar] = useState();

  useEffect(() => {  
    buscar("/videos", actualizarVideos);
  },[])

  const registrarVideo = (video) => {
    actualizarVideos([...videos, video]);
  }

  const eliminarVideo = (id) => {
    console.log(id);
    const nuevosVideos = videos.filter((video) => video.id !== id);
    actualizarVideos(nuevosVideos);
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

  const editarVideo = (id) => {

    setMostrarFormulario(true);
    videos.forEach((video) => {
      video.id === id && setVideoEditar(video)
    })

  }

  const cerrarEditar = () => {
    setMostrarFormulario(false);
  }

  return (
    <div className="App">     
      <Banner />
      <div className='contenedor-inf'>
      
        {
          categorias.map((categoria) => <Categoria 
            
            datos={categoria}
            key={categoria.id}
            videos={videos.filter(videos => videos.categoria === categoria.titulo)}
            eliminarVideo={eliminarVideo}
            editarVideo={editarVideo}
          />
          )
        }
      </div>
      {
        mostrarFormulario && <FormularioModal 
          categorias={categorias.map((categoria) => categoria.titulo)}
          videoEditar={videoEditar}
          registrarVideo={registrarVideo}
          cerrarEditar={cerrarEditar}
        />
      }
      <Footer />
    </div>
  );
}

export default App;
