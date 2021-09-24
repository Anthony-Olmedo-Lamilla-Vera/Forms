import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contextUSer } from "../Context/Dateuser";
import { InicioUrl } from "../Variables";

function Home() {
  const { Token } = useContext(contextUSer);
  useEffect(() => {
    console.log(Token);
  }, [Token]);

  return (
    <div className="Nombre_Home">
      <h2>Hola Bienvenido,</h2>

      {Token ? (
        <p>{Token.nombre}</p>
      ) : (
        <div className="MsgLogin">
          <Link to={InicioUrl + "/Register"}>Porfavor Create un Usuario</Link>
        </div>
      )}
    </div>
  );
}

export default Home;
