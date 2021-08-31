import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tutorial básico de React
        </p>
      </header>
      <section>
        <Componente msg = "Nombre: Dario Cante Segura "/>
        <Componente msg = "Materia: Tecnologias para la Web "/>
        <Componente msg = "Grupo: 2CV13 "/>
      </section>
    </div>
  );
}

export default App;
