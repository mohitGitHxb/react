import React from "react";
import { Container, Row , Col} from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from "../assets/img/nav-icon2.svg";
import NavIcon3 from "../assets/img/nav-icon3.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#" className="">
                <img src={NavIcon1} alt="linkedIn" />
              </a>
              <a href="#" className="">
                <img src={NavIcon2} alt="instagram" />
              </a>
              <a href="#" className="">
                <img src={NavIcon3} alt="github" />
              </a>
            </div>
            <p>Copyright lag jayenga re!!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
