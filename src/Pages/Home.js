import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contextUSer } from "../Context/Dateuser";

function Home() {
  const { Token } = useContext(contextUSer);
  useEffect(() => {}, [Token]);

  return (
    <div className="Nombre_Home">
      <h2>Hola Bienvenido,</h2>

      {Token ? (
        <p>{Token.Nombre}</p>
      ) : (
        <div className="MsgLogin">
          <Link to="/Register">Porfavor Create un Usuario</Link>
        </div>
      )}
    </div>
  );
}

export default Home;
