import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ title, home }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">{title}</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">{home}</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
