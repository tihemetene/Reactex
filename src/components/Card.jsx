import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Caixa = ({ info, cardTitle }) => (
  <Card>
    <Card.Header>{cardTitle}</Card.Header>
    <Card.Body>
      <Card.Title />
      <Card.Text />
      <Button variant="dark">
        { info }
        {' '}
      </Button>
      <Card.Img src="https://media0.giphy.com/media/LmNwrBhejkK9EFP504/200.gif" />
    </Card.Body>
  </Card>
);

export default Caixa;
