import "./App.css";
import React, { Component } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Link, Route } from "react-router-dom";
import routesConfig from "./routesConfig";

//consumir app com AXIOS
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Link to="/"> Home</Link>
          <Link to="/consulta"> Consulta </Link>
          <Link to="/delete"> Delete</Link>
          <Link to="/alterar"> Alterar</Link>
          <br></br>
          <Link to="/consultaParad">ConsultarParadigmas</Link>
          <br></br>
          <Link to="/inserirParad">Inserir Paradigma</Link>
        </div>
        {routesConfig.map((value, key) => {
          return (
            <Route
              key={key}
              path={value.path}
              component={value.component}
              exact={value.exact}
            ></Route>
          );
        })}
      </div>
    );
  }
}
export default App;
