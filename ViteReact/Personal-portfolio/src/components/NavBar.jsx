import React, { useEffect, useState } from "react";
import { Navbar, Container ,Nav } from "react-bootstrap";
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg'; 
import  Banner  from "./Banner";
import logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom'
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const UpdateActiveLinkHandler = (e) => {
    setActiveLink(e);
  };
  return (
    <>
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt={"logo"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon">Toggle navigation</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                UpdateActiveLinkHandler("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                UpdateActiveLinkHandler("skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                UpdateActiveLinkHandler("projects");
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                UpdateActiveLinkHandler("contact");
              }}
            >
              Contact
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={NavIcon1} alt={"github"} />
              </a>
              <a href="#">
                <img src={NavIcon2} alt={"github"} />
              </a>
              <a href="#">
                <img src={NavIcon3} alt={"github"} />
              </a>
            </div>
            <button
              className="vvd"
              onClick={(e) => {
                console.log(e);
              }}
            >
              <span>Let's connect bitches</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Banner/>
    </>
  );
};

export default NavBar;
