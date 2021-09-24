import React, { useContext, useEffect, useState } from "react";
import Forms from "../Components/Forms";
import axios from "axios";
import { InicioUrl, UrlString } from "../Variables";
import { useHistory, Link } from "react-router-dom";
import { contextUSer } from "../Context/Dateuser";

function Login() {
  const [Loading, setLoading] = useState(false);
  const [Contraseña, setContraseña] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Logeado, setLogeado] = useState(false);
  const History = useHistory();
  const { setUser } = useContext(contextUSer);

  async function Login(e) {
    setLoading(true);
    e.preventDefault();
    const Date = [];
    await axios
      .post(UrlString + "Login", {
        Correo: Correo,
        Contraseña: Contraseña,
      })
      .then(function (response) {
        setLogeado(true);
        setLoading(false);
        Date.push(response.data);
        window.localStorage.setItem("User", JSON.stringify(Date[0]));
        console.log("Logeo Correcto ");
        History.push(InicioUrl + "/");
        window.location.reload();
      })
      .catch(function (error) {
        console.log("eexoste im errp");
        setLoading(false);
        console.log(error);
        setUser(false);
      });
  }

  return (
    <div className="">
      <h3>Login de Usuario</h3>

      <form onSubmit={Login}>
        <Forms
          value={Correo}
          onchange={(e) => setCorreo(e.target.value)}
          nombre="Correo Electronico"
          type="email"
          id="exampleInputEmail1"
          classCorreo="exampleInputEmail1"
        />
        <Forms
          value={Contraseña}
          onchange={(e) => setContraseña(e.target.value)}
          nombre="Contraseña"
          type="password"
          id="exampleInputPassword1"
          classCorreo="exampleInputPassword1"
        />

        <button type="submit" class="btn btn-primary center">
          Login
        </button>
      </form>
      {Logeado ? (
        ""
      ) : (
        <div className="MsgLogin">
          <p className="errorlog">Si no Tienes una cuenta Registrate </p>
          <Link to={InicioUrl + "/Register"}> Registrarse </Link>
        </div>
      )}
      {Loading ? (
        <div className="spinner">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Login;
