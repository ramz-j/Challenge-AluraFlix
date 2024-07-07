import "../estilos/Boton.css";

const Boton = (props) => {

  console.log(props);

  return (
    <button className="boton">{props.children}</button>
  )
}

export default Boton;