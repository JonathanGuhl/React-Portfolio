import React, { useState } from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import '../../styles/style.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const cardStyle = {
    background: "#08B2E3"
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Container className="w-50">
    <Card style={cardStyle} className="my-5 p-3">
        <Card.Title className="text-center">Contact Me</Card.Title>
        <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='p-2' controlId="formName">
          <Form.Label >Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className='p-2' controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className='p-2' controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>
        <div className='text-center'>
        <Button className='text-center p-2' variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>
      </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default ContactForm;