import './App.css';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import api from './api';

  //consumir app com AXIOS
   class App extends Component {
     constructor(){
     super();
    this.state= {
      linguagens: [],
      nome: '',
      caracteristicas: [''],
    }
    };  
    async componentDidMount(){  
      const response = await api.get('');

      //console.log(response.data);

      this.setState({ linguagens: response.data});
    }

    render(){
     const {linguagens} = this.state;
  return ( 
    <div className="App">
      <header className="App-header">
      Classificador de linguagens
      {console.log(linguagens)}
      {linguagens.map(linguagem => (
        <li key =  {linguagem._id} >
        <h7>
        nome: {linguagem.nome}
        </h7>
        <br> 
        </br>
        <h9>
          Caracteristicas : {linguagem.caracteristica } 
          
        </h9>
        <br>
        </br>
        <h10>
          Paradigmas : {linguagem.paradigmas}
        </h10>
        <br></br>
        <br></br>
        </li>
      ))}
<div>
    <label>Nome da Linguagem : </label>
    <input onChange={this.updateInfo} name="nome" value={this.nome}/>
    <br></br>
    <br></br>
    </div>
    
      <div class="btn-group">
      <Button label="Inserir" />
      <Button label="Deletar" />
      <Button label="Consultar" onClick = {this.noClick} />
      <Button label="Alterar" />  
      </div>
      </header>
       </div>
  )}} ;

//export default api;
export default App;
