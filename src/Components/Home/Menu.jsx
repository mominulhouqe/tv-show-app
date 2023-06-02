import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" className="container mb-5 p-2" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="text-white">
            Nav
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/booking" className="text-white">
              Booked
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
