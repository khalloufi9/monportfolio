import React from 'react'
import { Navbar,Container,NavLink,Nav,NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Navbare = () => {
  return (
    <Navbar  variant="dark" expand="lg"  style={{backgroundColor:"hsl(346, 88%, 73%)",fontWeight:"700",fontSize:"1.2rem"}}>  <Container>
    <Navbar.Brand href="#home">Mon Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="
    basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/accueil" >Home</Nav.Link>
        <Nav.Link href="/skills">My Skills</Nav.Link>
        <Nav.Link href="/service">Services</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
    
  )
}

export default Navbare