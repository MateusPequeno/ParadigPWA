import "../App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import api from "../api";

class ListaParad extends Component {
  constructor() {
    super();
    this.state = {
      paradigmas: [],
      nomeParad: "",
      caracteristica: [],
    };
  }
  async componentDidMount() {
    const response = await api.get("/paradigmas");
    //console.log(response.data);
    this.setState({ paradigmas: response.data });
  }
  render() {
    const { paradigmas } = this.state;
    return (
      <div>
        {console.log(paradigmas)}
        <br></br>
        <center>
          {paradigmas.map((paradigma) => (
            <li key={paradigma._id}>
              <h9>ID: {paradigma._id}</h9>
              <br></br>
              <h7>NomeParad: {paradigma.nomeParad}</h7>
              <br></br>
              <h9>Caracteristica : {paradigma.caracteristica}</h9>
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
export default ListaParad;
