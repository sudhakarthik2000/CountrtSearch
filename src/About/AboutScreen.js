import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const AboutScreen = () => {
  return (
    <Container className="about-container">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="about-card">
            <Card.Body>
              <Card.Title className="about-title" style={{color:"black"}}>About This App</Card.Title>
              <Card.Text className="about-text">
                Welcome to the Country Information App! This application provides a comprehensive resource for exploring details about countries worldwide. Discover information such as flags, capitals, regions, populations, and continents with ease.
              </Card.Text>
              <Card.Text className="about-text">
                <strong style={{color:"black"}}>Purpose:</strong> Our goal is to offer a user-friendly platform for anyone interested in learning about countries. Whether you're a student, traveler, or curious mind, this app is designed to be a valuable and accessible resource.
              </Card.Text>
              <Card.Text className="about-text">
                <strong style={{color:"black"}}>Technology Stack:</strong> This app is built with <em>React</em> and <em>Bootstrap</em>, utilizing data from the <em>Rest Countries API</em> and real-time weather information from the <em>OpenWeather API</em>.
              </Card.Text>
              <Card.Text className="about-text">
                <strong style={{color:"black"}}>Contact:</strong> Have questions or feedback? Reach out to us at <a style={{color:"violet"}} href="mailto:sudhakarthik2000@gmail.com">sudhakarthik2000@gmail.com</a>. We would love to hear from you!
              </Card.Text>
              <Card.Text className="about-text">
                <strong style={{color:"black"}}>Acknowledgments:</strong> A heartfelt thanks to the open-source community for providing invaluable tools and libraries that helped bring this project to life.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutScreen;
