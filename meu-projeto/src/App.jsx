import React from 'react';
import Cabecalho from './components/Cabecalho';
import Blog from './components/Blog';
import Rodape from './components/Rodape';
import './styles.css'; // Importando estilos, se houver

const App = () => {
  return (
    <div>
      <Cabecalho />
      <Blog />
      <Rodape />
    </div>
  );
};

export default App;