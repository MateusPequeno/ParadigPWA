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
import InserirForm from "./InserirForm";
import DeleteForm from "./DeleteForm";
//consumir app com AXIOS
class Delete extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Deletar Linguagem</h1>
        </center>
        <br></br>
        <br></br>
        <DeleteForm></DeleteForm>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default Delete;
