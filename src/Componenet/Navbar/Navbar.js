import React from 'react'
import { Navbar,Container,NavLink,Nav,NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbare = () => {
  return (
    <Navbar   bg="light" expand="lg" style={{fontWeight:"600",fontSize:"1.2rem"}}> 
     <Container >
    <Navbar.Brand href="/accueil" > <span style={{color:" rgb(227, 108, 155)",fontWeight:"600",borderBlockStyle:"dashed",fontSize:"3rem"}}>KO</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="
    basic-navbar-nav">
      <Nav className="me-auto" >
        <Nav.Link className='oumaima' href="/accueil" > Accueil</Nav.Link>
        <Nav.Link className='oumaima' href="/apropos">A propos</Nav.Link>
        <Nav.Link className='oumaima' href="/service">Service</Nav.Link>
        <Nav.Link className='oumaima' href="/contact">Portfolio</Nav.Link>
        <Nav.Link className='oumaima' href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
    
  )
}

export default Navbare