import "../App.css";
import React, { Component } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import AlterarForm from "./AlterarForm";

class Alterar extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Alterar dados de uma Linguagem</h1>
        </center>
        <br></br>
        <br></br>
        <AlterarForm></AlterarForm>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default Alterar;
