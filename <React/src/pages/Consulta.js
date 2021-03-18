import "../App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import api from "../api";

class ListaCons extends Component {
  constructor() {
    super();
    this.state = {
      linguagens: [],
      nome: "",
      caracteristica: [],
    };
  }
  async componentDidMount() {
    const response = await api.get("");
    //console.log(response.data);
    this.setState({ linguagens: response.data });
  }

  render() {
    const { linguagens } = this.state;
    return (
      <div>
        {console.log(linguagens)}
        <br></br>
        <center>
          {linguagens.map((linguagem) => (
            <li key={linguagem._id}>
              <h9>ID: {linguagem._id}</h9>
              <br></br>
              <h7>Nome: {linguagem.nome}</h7>
              <br></br>
              <h9>Caracteristica : {linguagem.caracteristica}</h9>
              <br></br>
              <h10>Paradigmas : {linguagem.paradigmas}</h10>
              <br></br>
              <br></br>
            </li>
          ))}
        </center>
      </div>
    );
  }
}
//export default api;
export default ListaCons;
