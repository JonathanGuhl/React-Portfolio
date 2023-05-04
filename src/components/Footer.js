import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="bg-dark text-white mt-5 p-4">
        <Container>
          <Row>
            <Col md={6} className="text-right">
              <a className="text-white" href="https://github.com/JonathanGuhl">
                <FaGithub size={30} className="mx-3" />
              </a>
              <a className="text-white" href="https://www.linkedin.com/in/jonathan-guhl-565513272">
                <FaLinkedin size={30} className="mx-3" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };
  
  export default Footer;
 
  
  
  
  
  
  
  