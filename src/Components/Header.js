import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contextUSer } from "../Context/Dateuser";
import { useHistory } from "react-router-dom";

function Header() {
  const { DatesUser, User, Token, setToken, setUser, setDatesUser } =
    useContext(contextUSer);
  const History = useHistory();

  useEffect(() => {
    const local = JSON.parse(window.localStorage.getItem("User"));
    setToken(local);
  }, []);
  const cerrarSession = () => {
    window.localStorage.removeItem("User");
    History.push("/login");
    window.location.reload("/login");
  };
  return (
    <header className="App-header">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link to="/" className="nav-link " aria-current="page">
            Home
          </Link>
        </li>
        {Token === null && (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </>
        )}
        {Token != null ? (
          <button
            type="button"
            onClick={cerrarSession}
            className="btn btn-outline-danger"
          >
            Cerrar Sesion x
          </button>
        ) : (
          ""
        )}
      </ul>
    </header>
  );
}

export default Header;
