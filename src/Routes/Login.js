import React, { useContext, useEffect, useState } from "react";
import Forms from "../Components/Forms";
import axios from "axios";
import { UrlString } from "../Variables";
import { useHistory, Link } from "react-router-dom";
import { contextUSer } from "../Context/Dateuser";

function Login() {
  const [Contraseña, setContraseña] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Logeado, setLogeado] = useState(false);
  const History = useHistory();
  const { DatesUser, setUser, setDatesUser } = useContext(contextUSer);

  async function Login(e) {
    e.preventDefault();

    const Date = [];
    await axios
      .post(UrlString + "Login", {
        Correo: Correo,
        Contraseña: Contraseña,
      })
      .then(function (response) {
        setLogeado(true);
        setUser(true);
        Date.push(response.data);
        setDatesUser(Date);
        window.localStorage.setItem("User", JSON.stringify(Date[0]));
        console.log("Logeo Correcto ");
        History.push("/");
        window.location.reload("/");
      })
      .catch(function (error) {
        console.log(error);
        setUser(false);
      });
    console.log(Date);
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
        <p>Logeado Correctamente </p>
      ) : (
        <div className="MsgLogin">
          <p className="errorlog">Si no Tienes una cuenta Registrate </p>
          <Link to="/Register"> Registrarse </Link>
        </div>
      )}
    </div>
  );
}

export default Login;
