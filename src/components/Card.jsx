import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

// Criação de um popup modal centralizado
function ModalCentralizado(props) {
  return (
    <Modal
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dúvidas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Até o momento</h4>
        <p>
          <p>1. como retirar a tag Home, sendo que a Pitang2 leva para o mesmo lugar.</p>
          <p>2. Arrumar o GH pages, a página quebra quando dá refresh</p>
          <p>3. Card do grupo não tá aceitando props</p>
          <p>4. O aplicativo já começa com um Todo vazio, como retirar</p>
          <p>5. Tentar colocar os nomes e o título como props</p>
        </p>
      </Modal.Body>
    </Modal>
  );
}

// Criação do card
const Caixa = ({
  info, cardTitle,
}) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card className="m-4">
      <Card.Header><b>{cardTitle}</b></Card.Header>
      <Card.Body className="p-2">
        <Button variant="dark" onClick={() => setModalShow(true)} className="p-2 preto" data-toggle="modal" data-target="#exampleModalLong">
          {info}
          {' '}
        </Button>
        <ModalCentralizado
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className="text-center texto">
          There are no items yet.
          {' '}
          <Image className="rounded mx-auto d-block " src="https://media0.giphy.com/media/LmNwrBhejkK9EFP504/200.gif" roundedCircle />
        </div>
      </Card.Body>
    </Card>
  );
};
export default Caixa;
