import "../src/App.css";
import Route from "./Routes/Routes";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./Routes/Routes";
import Dateuser, { contextUSer } from "./Context/Dateuser";
import { useContext, useEffect } from "react";
import Header from "./Components/Header";
import Contenedor from "./Components/Contenedor";

function App() {
  return (
    <BrowserRouter>
      <Dateuser value>
        <Contenedor />
      </Dateuser>
    </BrowserRouter>
  );
}

export default App;
