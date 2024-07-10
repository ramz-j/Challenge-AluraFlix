import "../estilos/Boton.css";

const Boton = (props) => {

  return (
    <input type={props.type} className="boton" value={props.children} />
  )
}

export default Boton;