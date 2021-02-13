import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ title, home }) => (
  <Navbar className="casa" variant="dark">
    <Navbar.Brand className="titulo" href="#home">{title}</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="casa" href="#home">{home}</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
