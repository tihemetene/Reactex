import React from 'react';
import Header from './components/Header';
import Caixa from './components/Card';
import './components/index.css';

const App = () => (
  <div className="App">
    <Header title="PITANG 2" home="HOME" />
    <Caixa info="ADD INFO" cardTitle="Home"> </Caixa>
  </div>
);

export default App;
