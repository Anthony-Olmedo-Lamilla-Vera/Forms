import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { contextUSer } from "../Context/Dateuser";
import Home from "../Pages/Home";
import Login from "./Login";
import Register from "./Register";

function Routes() {
  const { DatesUser, User, Token, setToken, setUser, setDatesUser } =
    useContext(contextUSer);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/Register">
        <Register />
      </Route>
    </Switch>
  );
}

export default Routes;
