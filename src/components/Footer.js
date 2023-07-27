import React from "react";
import logoText from "../images/logo-text.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
// import { Linkedin } from "react-bootstrap-icons";

function Footer() {
  return (
    <footer>
      <Container fluid className="p-5 shadow">
        <Row >
          <Col md={4}>
            <img src={logoText} alt="PP Electrical" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
              error deleniti culpa maxime explicabo, sed necessitatibus
              molestias expedita atque libero.
            </p>
          </Col>
          <Col md={4} className="d-flex flex-column align-items-center">
            <strong className="pp-color fw-1">Overview</strong>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Clients</Link>
            <Link>Services</Link>
          </Col>
          <Col md={4}>
            <strong className="pp-color fw-1">Contacts</strong>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
