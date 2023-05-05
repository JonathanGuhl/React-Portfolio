import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/style.css'

const Resume = () => {
  const frontendProficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Bootstrap',
    'jQuery',
    'GraphQL',
    'PWA',
    'Bulma',
    'Handlebars'
  ];

  const backendProficiencies = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'NoSQL',
    'Mongoose',
    'Sequelize',
    'MVC',
    ];

    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Container>
          <h2 className="text-center mb-4">Skills</h2>
          <Row>
            <Col md={6} className="text-center">
              <h3>Front-End Proficiencies</h3>
              <p>{frontendProficiencies.join(', ')}</p>
            </Col>
            <Col md={6} className="text-center">
              <h3>Back-End Proficiencies</h3>
              <p>{backendProficiencies.join(', ')}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
    
  

  // return (
  //   <Container>
  //     <Row className="justify-content-center">
  //       <Col md={8} className="mx-auto">
  //         <h2>Skills</h2>
  //         <h3>Front-End Proficiencies</h3>
  //         <ListGroup>
  //           {frontendProficiencies.map((proficiency, index) => (
  //             <ListGroup.Item key={index}>{proficiency}</ListGroup.Item>
  //           ))}
  //         </ListGroup>
  //         <h3>Back-End Proficiencies</h3>
  //         <ListGroup>
  //           {backendProficiencies.map((proficiency, index) => (
  //             <ListGroup.Item key={index}>{proficiency}</ListGroup.Item>
  //           ))}
  //         </ListGroup>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
};

export default Resume;







