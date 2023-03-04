import React from 'react'
import {Navbar , Nav , Container } from 'react-bootstrap'
import CartMenu from './CartMenu'



const Header = () => {


  
  return (
    <>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Add to Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
         <CartMenu/>
        </Container>
      </Navbar>
    </>
  )
}

export default Header 