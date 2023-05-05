import React, { useEffect, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/style.css'

const AboutMe = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const speed = 30;
    const title = titleRef.current;
    const text = textRef.current;
    const delay = title.innerHTML.length * speed + speed;

    setTimeout(() => {
      text.style.display = "inline-block";
      typeEffect(title, speed);
      typeEffect(text, speed);
    }, delay);
  }, []);

  function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    let timer = setInterval(() => {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  return (
    <div className="d-flex justify-content-center align-items-center p-4 vh-60">
      <Container className='aboutcontainer'>
        <Row className="justify-content-center">
          <Col lg={9} className="text-center">
            <h2 className="aboutTitle" ref={titleRef}>About Me!</h2>
            <hr />
            <p className="aboutContent" ref={textRef}>
              Hi there! My name is Jon Guhl and I will be graduating from the full stack web development coding bootcamp offered by the University of Kansas through edX. I'm a full stack web developer with experience in both front end and back end development. While I enjoy working on all aspects of web development, I find front end work to be the most exciting. I love being able to bring a design to life and make a website look and feel great for the user. During my time at the coding bootcamp, I gained hands-on experience with a variety of technologies and tools, including HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more! I also had the opportunity to work on several group projects, which allowed me to further develop my collaboration and teamwork skills. In addition to my technical skills, I bring a strong work ethic and a passion for learning to the table. I'm constantly seeking out new challenges and opportunities to grow and improve as a developer. I'm excited to see where my coding journey takes me and look forward to connecting with others in the tech community. Thanks for stopping by!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default AboutMe;