import React from 'react';
import { Card } from 'react-bootstrap';

const caixaGrupo = () => (
  <Card className="m-4">
    <Card.Header><b>Nomes</b></Card.Header>
    <Card.Body className="p-2">
      <div className="text-center texto">
        <h1>
          <p>Thiago Barboza Pierre </p>
          <p>Tiago Netto </p>
          <p>Diogo Souza </p>
          <p>Alan Brito </p>
          <p>Augusto Falcão </p>
        </h1>
      </div>
    </Card.Body>
  </Card>
);

export default caixaGrupo;
