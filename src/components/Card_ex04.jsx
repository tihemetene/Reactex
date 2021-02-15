import React from 'react';
import { Card } from 'react-bootstrap';

const Caixa2 = ({ title, className, children }) => (
  <Card className={`mb-4 ${className}`}>
    <Card.Header>
      <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Body>{children}</Card.Body>
  </Card>
);

export default Caixa2;
