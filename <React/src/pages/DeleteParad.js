import "../App.css";
import React, { Component } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import InserirForm from "./InserirForm";
import DeleteParadForm from "./DeleteParadForm";
//consumir app com AXIOS
class DeleteParad extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Deletar Paradigma</h1>
        </center>
        <br></br>
        <br></br>
        <DeleteParadForm></DeleteParadForm>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default DeleteParad;
