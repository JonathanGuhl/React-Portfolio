import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/style.css'



const Footer = () => {
  return (
      <footer className="mt-5 p-4 position-fixed bottom-0 w-100">
        <Container className="d-flex justify-content-center">
          <Row>
            <Col className="text-right footerIcons">
              <a className="text-white" href="https://github.com/JonathanGuhl" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="mx-3" />
              </a>
            </Col>
            <Col>
              <a className="text-white footerIcons" href="https://www.linkedin.com/in/jonathan-guhl-565513272" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="mx-3" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;
 
  
  
  
  
  
  
  