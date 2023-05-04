import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {
  return (
    <Container>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#aboutMe">Jonathan Guhl</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#aboutMe">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact Me</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
    </Navbar>
    </Container>
  );
}

export default Navigationbar;