import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Caixa = ({ info, cardTitle }) => (
  <Card className="m-4">
    <Card.Header><b>{cardTitle}</b></Card.Header>
    <Card.Body className="p-2">
      <Button variant="dark" className="p-2 preto">
        { info }
        {' '}
      </Button>
      <div xs={6} md={4} className="text-center texto">
        There are no items yet.
        {' '}
        <Image className="rounded mx-auto d-block " src="https://media0.giphy.com/media/LmNwrBhejkK9EFP504/200.gif" roundedCircle />
      </div>
    </Card.Body>
  </Card>
);

export default Caixa;
