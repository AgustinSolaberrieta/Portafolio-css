import Style from "./Search.module.css";

const Search = () => {
  return (
    <div className={Style.contenedor}>
      <div>
        <h3>AS</h3>
      </div>
      <ul className={Style.nombres}>
        <h4>Inicio</h4>
        <h4>Sobre Mi</h4>
        <h4>Proyectos</h4>
        <h4>Contacto</h4>
        <h4>CURRICULUM</h4>
      </ul>
    </div>
  );
};

export default Search;
