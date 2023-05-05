import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Resume from '../../docs/Resume.docx';
import '../../styles/style.css';

const Skills = () => {
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
          <Row>
          <Col md={12} className="text-center resumeText p-4">
        <h1 className="resumeTitle">Resume</h1>
        <div>Download my resume <a href={Resume} download={Resume}>here</a></div>
          </Col>
            <Col md={12} className="text-center resumeText p-4">
              <h1 className="resumeTitle">Front-End Proficiencies</h1>
              <div className="resumeText">{frontendProficiencies.join(', ')}</div>
            </Col>
            <Col md={12} className="text-center resumeText p-4">
              <h1 className="resumeTitle">Back-End Proficiencies</h1>
              <div className="resumeText">{backendProficiencies.join(', ')}</div>
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

export default Skills;







