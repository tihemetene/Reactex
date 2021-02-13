import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Caixa = ({ info, cardTitle }) => (
  <Card className="m-4">
    <Card.Header><b>{cardTitle}</b></Card.Header>
    <Card.Body className="p-2">
      <Button variant="dark" className="p-2 casa">
        { info }
        {' '}
      </Button>
      <Image className="rounded mx-auto d-block " src="https://media0.giphy.com/media/LmNwrBhejkK9EFP504/200.gif" roundedCircle />
    </Card.Body>
  </Card>
);

export default Caixa;
