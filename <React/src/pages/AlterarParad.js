import "../App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import api from "../api";
import { Link, Route } from "react-router-dom";
import routesConfig from "../routesConfig";
import AlterarForm from "./AlterarForm";
import AlterarParadForm from "./AlterarParadForm";
class AlterarParad extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Alterar dados de um Paradigma</h1>
        </center>
        <br></br>
        <br></br>
        <AlterarParadForm></AlterarParadForm>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default AlterarParad;
