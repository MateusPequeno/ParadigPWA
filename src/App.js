import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  //consumir app com AXIOS
  return ( 
    <div className="App">
      <header className="App-header">
      Classificador de linguagens
      
      
      <div className="card">
    <h5>Entre com o nome da linguagem:</h5>
    <InputText className="p-d-inline" />
    </div>
    
      <div class="btn-group">
      <Button label="Inserir" />
      <Button label="Deletar" />
      <Button label="Consultar" />
      <Button label="Alterar" />  
      </div>
      </header>
      
    </div>
    
  );
}
export default App;
