import "../estilos/Video.css";

const Video = (props) => {
    
    const { titulo, categoria, imagen, video, id } = props.datos;
    const { color, eliminarVideo, editarVideo }  = props;
    

    const borderImg = {
        border: `5px solid ${color}`
    }

    const borderBtns = {
        borderBottom: `5px solid ${color}`,
        borderRight: `5px solid ${color}`,
        borderLeft: `5px solid ${color}`
    }

    const shadowImg = {
        boxShadow: `inset 0px 0px 20px 8px ${color}`
    }

    const shadowBtns = {
        boxShadow: `0px -5px 6px 2px ${color}`
    }
    
    return <div className="contenedor-video">
        <div className="contenedor-img" >
            <a href={video} target="_blank" rel="noreferrer">
                <img style={borderImg} src={imagen} alt={titulo} />
            </a>
            <div className="contenedor-img-shadow" style={shadowImg}></div>
        </div>
        <div className="contenedor-btns" style={borderBtns}>                
            <button onClick={() => eliminarVideo(id)} className="btn-borrar">
               <span class="material-symbols-outlined">
                    delete_forever
                </span>
                    Borrar
            </button>
            <button onClick={() => editarVideo(id)} className="btn-editar">
                    <span class="material-symbols-outlined">
                        border_color
                    </span>
                Editar
            </button>
        </div>
        <div className="sombra-btns" style={shadowBtns}></div>
            
    </div>
}

export default Video;