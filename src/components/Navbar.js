import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/style.css'

function Navigationbar({ currentPage, handlePageChange }) {

  return (
    <Container>
      <Navbar className="" expand="lg">
        <Navbar.Brand id="navBarLinks" href="#aboutMe" className='p-3 navBar' onClick={() => handlePageChange('AboutMe')}>Jonathan Guhl</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Navbar.Brand id="navBarLinks" href="#aboutMe" className='p-2 m-1 navBar' onClick={() => handlePageChange('AboutMe')}>About Me</Navbar.Brand>
            <Navbar.Brand id="navBarLinks" href="#portfolio" className='p-2 m-1 navBar' onClick={() => handlePageChange('Portfolio')}>Portfolio</Navbar.Brand>
            <Navbar.Brand id="navBarLinks" href="#contact" className='p-2 m-1 navBar' onClick={() => handlePageChange('Contact')}>Contact Me</Navbar.Brand>
            <Navbar.Brand id="navBarLinks" href="#resume" className='p-2 m-1 navBar' onClick={() => handlePageChange('Resume')}>Resume</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Navigationbar;