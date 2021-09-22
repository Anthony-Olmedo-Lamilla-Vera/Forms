import React, { useContext, useEffect } from "react";
import { contextUSer } from "../Context/Dateuser";
import Routes from "../Routes/Routes";
import Header from "./Header";

function Contenedor() {
  const { DatesUser, User, Token, setToken, setUser, setDatesUser } =
    useContext(contextUSer);

  useEffect(() => {}, [Token]);

  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default Contenedor;
