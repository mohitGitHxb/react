import React from 'react'
import { Col, Container, Image, InputGroup, Row } from 'react-bootstrap'
import hero1 from '../assets/hero1.jpg'
import hero4 from '../assets/hero4.jpg'
import HowItWorks from './HowItWorks'
const Header = () => {
  return (
    <header className='bg-light '>
    <Container className='primary-container mt-md-4' >
        <Row className='h-100'>
            <Col sm={12} lg={6} className=' header-left-side d-flex flex-column justify-content-center align-items-start pt-4'>
                <h1 className='display-2 fs-1 text-black fw-bold text-capitalize'>
                    I Think I Am Losing <br/> My Mind..
                </h1>
                <p className='main-hero-para'>
                    lorem ipsum dolor sit amet, consected raeoibei gbeig g ige giege giegb  geig vndk vnid dnvsiss grisrpgsn gsirgnaspgnr rgsognrsg gros grsgop grsongsr gpsrn
                </p>
                <h3>Get early access</h3>
                <div className='mt-3 input-group position-relative'>
                <input
                  type="text"
                  className="rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
               <InputGroup.Text className='text-bg-primary inpGroup ' id="btnGroupAddon2">GET IT NOW</InputGroup.Text>
                </div>
            </Col>
            <Col sm={12} lg={6} className='header-right-side pt-5 d-lg-flex d-sm-none justify-justify-content-lg-center align-item-center-center position-relative' >
            <img src={hero1} className='img-fluid position-absolute'/>
            <img src={hero4} className='img-fluid position-absolute img2'/>
            </Col>
        </Row>
    </Container>
    </header>
  )
}

export default Header