import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { contextUSer } from "../Context/Dateuser";
import Home from "../Pages/Home";
import { InicioUrl } from "../Variables";
import Login from "./Login";
import Register from "./Register";

function Routes() {
  return (
    <Switch>
      <Route exact path={InicioUrl + "/"}>
        <Home />
      </Route>
      <Route exact path={InicioUrl + "/login"}>
        <Login />
      </Route>
      <Route exact path={InicioUrl + "/Register"}>
        <Register />
      </Route>
    </Switch>
  );
}

export default Routes;
