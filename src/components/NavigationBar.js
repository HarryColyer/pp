import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import logo from "../images/pp-ele-logo.png";
import "../App";

function NavigationBar() {


  return (
    <Navbar expand="lg" className="px-1 py-4 shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="PP Electrical brand" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: "none", outline: "none"}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex align-items-center ms-auto">
            <Nav.Link className="mx-1"><Link to="/" className="custom-hover px-3 py-2">Home</Link></Nav.Link>
            <Nav.Link className="mx-1"><Link to="/about" className="custom-hover px-3 py-2">About</Link></Nav.Link>
            <Nav.Link className="mx-1"><Link to="/clients" className="custom-hover px-3 py-2">EV Charging</Link></Nav.Link>
            <Nav.Link className="mx-1"><Link to="/services" className="custom-hover px-3 py-2">Services</Link></Nav.Link>
            <Nav.Link>
              <Button variant="danger" className="px-5 py-3">Contact Us</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
