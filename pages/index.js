import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import {
  Button,
  Col,
  Container,
  Image,
  Jumbotron,
  Navbar,
  Nav,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

//import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FaaSComposer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">FaaSComposer</Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="outline-info">Log In</Button>
        </Nav>
      </Navbar>
      <Jumbotron className="centered">
        <h1>FaaSComposer</h1>
        <p>A graphical user interface for composing FaaS workflows</p>
        <Button variant="info" size="lg">
          Get Started
        </Button>
      </Jumbotron>

      <div className="page-section">
        <h2>Features</h2>
      </div>
      <div className="grey-background page-section">
        <h2>Meet the Team</h2>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <Image src="" roundedCircle />
            <p>Mariya Eyges</p>
            <FontAwesomeIcon icon={faGithubAlt} className="lg-icon" />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Image src="" roundedCircle />
            <p>Umar Karim</p>
            <FontAwesomeIcon icon={faGithubAlt} className="lg-icon" />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Image src="" roundedCircle />
            <p>Jhonatan Passalacqua</p>
            <FontAwesomeIcon icon={faGithubAlt} className="lg-icon" />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Image src="" roundedCircle />
            <p>Veronica Stork</p>
            <FontAwesomeIcon icon={faGithubAlt} className="lg-icon" />
          </Col>
        </Row>
      </div>
      <div className="page-section">
        <h2>Contributing</h2>
        <p>
          FaaSComposer is an open-source project. Check out our Github repo to
          see how you can contribute!
          <br />
          <Button variant="info" size="lg" style={{ 'margin-top': '20px' }}>
            Github
            <FontAwesomeIcon
              icon={faGithubAlt}
              style={{ 'margin-left': '10px', 'font-size': '1.2em' }}
            />
          </Button>
        </p>
      </div>
    </div>
  );
}
