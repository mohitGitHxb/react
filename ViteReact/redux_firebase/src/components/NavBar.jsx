import { Button } from "react-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Navbar bg="light" className="navbar-bg" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MosfetAmplifier</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-1 d-flex justify-content-evenly">
              <NavLink className="links" to="/">
                Home
              </NavLink>
              <NavLink className="links" to="/services">
                Services
              </NavLink>
              <NavLink className="links" to="/contact">
                Contact
              </NavLink>
              <NavLink className="links" to="/about">
                About
              </NavLink>
            </Nav>
            <Button className="me-2 btn-style" variant="success">
              Sign in
            </Button>
            <Button className="ms-2 btn-style" variant="outline-success">
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
