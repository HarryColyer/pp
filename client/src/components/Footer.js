import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
// import { Linkedin } from "react-bootstrap-icons";

function Footer() {
  const [click, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!click);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [click]);

  return (
    <footer className="footer">
      <Container fluid className="p-5">
        <Row>
          <Col sm className="d-flex flex-column align-items-center my-3">
            <div className="d-flex flex-column text-center">
              <strong className="pp-color fw-1 mb-2">Overview</strong>{" "}
              <Link onClick={() => handleClick()} to="/">
                Home
              </Link>
              <Link onClick={() => handleClick()} to="/about">
                About
              </Link>
              <Link onClick={() => handleClick()} to="/evcharging">
                EV Insallation
              </Link>
              <Link onClick={() => handleClick()} to="/olev">
                OLEV Grant
              </Link>
              <Link onClick={() => handleClick()} to="services">
                Services
              </Link>
              <Link onClick={() => handleClick()} to="/landlords">
                Landlords
              </Link>
              <Link onClick={() => handleClick()} to="/contact">
                Contact
              </Link>
            </div>
          </Col>
          <Col sm className="d-flex flex-column align-items-center my-3">
            <div className="d-flex flex-column text-center">
              <strong className="pp-color">Our Office</strong>
              <p className="pt-2">
                The Oast <br />
                EMR Centre <br />
                New Road <br />
                ME19 6BJ <br />
              </p>
            </div>
          </Col>

          <Col sm className="d-flex flex-column align-items-center my-3">
            <div className="d-flex flex-column text-sm-left text-center">
              <strong className="pp-color">Contacts</strong>
              <p className="pt-2">
                <a href="email: info@ppelectrical.org">info@ppelectrical.org</a>
                <br />
                <Link to="tel:07950887657" className="tel-link">
                  07950887657
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
