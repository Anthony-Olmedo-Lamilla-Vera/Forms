import React, { useContext, useEffect, useState } from "react";
import Forms from "../Components/Forms";
import axios from "axios";
import { UrlString } from "../Variables";
import { useHistory } from "react-router-dom";
import { contextUSer } from "../Context/Dateuser";
function Register() {
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [CaptureErr, setCaptureErr] = useState(false);
  const [Registrado, setRegistrado] = useState(false);
  const [Loading, setLoading] = useState(false);
  const { DatesUser, User, setUser, setDatesUser } = useContext(contextUSer);
  const history = useHistory();

  async function Registro(e) {
    e.preventDefault();
    setLoading(true);
    const Date = [];

    await axios
      .post(UrlString + "Register", {
        Nombre: Nombre,
        Correo: Correo,
        Contraseña: Contraseña,
      })
      .then(function (response) {
        setCaptureErr(false);
        setUser(true);

        setContraseña("");
        setCorreo("");
        setNombre("");
        setRegistrado(true);
        Date.push(response.data);

        window.localStorage.setItem("User", JSON.stringify(Date[0]));
        history.push("/");
        window.location.reload("/");
      })
      .catch(function (error) {
        setUser(false);
        setRegistrado(false);
        setCaptureErr(true);
        console.log(CaptureErr);
      });

    setLoading(false);
  }
  return (
    <div>
      <h3>Registro de Usuario</h3>
      <form onSubmit={Registro}>
        <Forms
          for="validationCustomUsername"
          onchange={(e) => setNombre(e.target.value)}
          nombre="UserName"
          type="text"
          value={Nombre}
          id="validationCustomUsername"
          classCorreo="validationCustomUsername"
        />
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
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
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

      {Registrado ? <h4>Registrado Correctamente </h4> : ""}
      {CaptureErr ? <h4>Errrorrr </h4> : ""}
    </div>
  );
}

export default Register;
