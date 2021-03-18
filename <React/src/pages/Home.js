import "../App.css";
import React, { Component } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
import InserirForm from "./InserirForm";
import imgIFB from "../imagens/imgifb.png"

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img src={imgIFB}/>
          </div>
          Classificador de linguagens
          <br></br>
          <br></br>
          <InserirForm></InserirForm>
          <br></br>
          <br></br>
          <div class="btn-group">
            <Link to="/delete">
              <Button label="Deletar" />
            </Link>

            <Link to="/consulta">
              <Button label="Consultar" />
            </Link>
            <Link to="/alterar">
              <Button label="Alterar" />
            </Link>
            <Link to="/consultaParad">
              <Button label="Consultar Paradigmas" />
            </Link>
            <Link to="/inserirParad">
              <Button label="Inserir Paradigmas" />
            </Link>
            <Link to="/deleteParad">
              <Button label="Deletar Paradigma" />
            </Link>
            <Link to="/alterarParad">
              <Button label="Alterar Paradigma"/>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}
export default Home;
