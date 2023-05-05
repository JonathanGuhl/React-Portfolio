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

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Container className="w-75">
    <Card className="my-5 p-3 cardContainer">
        <Card.Title className="text-center cardTitle">Contact Me</Card.Title>
        <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='p-2 text-center contactTitles' controlId="formName">
          <Form.Label >Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className='p-2 text-center contactTitles' controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className='p-2 text-center contactTitles' controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </Form.Group>
        <div className='text-center'>
        <Button className='btn text-center p-2 d-grid gap-2 col-6 mx-auto m-4 contactButton'  type="submit">
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