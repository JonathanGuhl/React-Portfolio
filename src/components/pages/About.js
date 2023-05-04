import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h2>Jonathan Guhl</h2>
          <p>Web Developer</p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus mi at ipsum laoreet pretium. Nullam eu purus in turpis mollis tincidunt. Donec non ornare nunc, id blandit est. Sed vitae mi sed purus consequat volutpat. In hac habitasse platea dictumst.
          </p>
          <p>
            Praesent tempus, enim vel facilisis bibendum, elit elit ultrices ante, eget feugiat tellus velit at magna. Nulla faucibus quis massa eu accumsan. Suspendisse in mauris vel nunc interdum feugiat vitae eget sem.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;