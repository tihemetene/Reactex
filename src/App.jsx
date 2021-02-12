import React from 'react';
import Header from './components/Header';
import Caixa from './components/Card';

const App = () => (
  <div className="App">
    <Header title="PITANG 2" home="HOME" />
    <Caixa info="Add info" cardTitle="Home"> </Caixa>
  </div>
);

export default App;
