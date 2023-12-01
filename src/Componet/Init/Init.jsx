// import Style from "./Init.module.css";
// import Img from "./rostroP.jpg";
// import fondo from "./codigo-fondo.png";

// const Init = () => {
//   return (
//     <div className={Style.Init}>
//       <div className={Style.fondoContainer}>
//         <img src={fondo} alt="" />
//       </div>
//       <div className={Style.contenido}>
//         <div className={Style.izq}>
//           <img src={Img} className={Style.imagen} />
//         </div>
//         <div className={Style.drc}>
//           <h1>Hola!</h1>
//           <h2>Soy Agustina Solaberrieta</h2>
//           <h3>Desarrollador Full Stack</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Init;
import React from "react";
import Style from "./Init.module.css";
import Img from "./rostroP.jpg";
import fondo from "./codigo-fondo.png";

const Init = () => {
  return (
    <div className={Style.Init}>
      <div className={Style.fondoContainer}>
        <img src={fondo} alt="" className={Style.fondoImagen} />
      </div>
      <div className={Style.contenido}>
        <div className={Style.izq}>
          <img src={Img} className={Style.imagen} alt="" />
        </div>
        <div className={Style.drc}>
          <h1>Hola!</h1>
          <h2>Soy Agustina Solaberrieta</h2>
          <h3>Desarrollador Full Stack</h3>
        </div>
      </div>
    </div>
  );
};

export default Init;
