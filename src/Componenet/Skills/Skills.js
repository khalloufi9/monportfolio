import React from 'react'
import './Skills.css'
import '../Accueil/Accueil.css'
import {Carousel,Card,Button} from 'react-bootstrap'
const Skills = () => {
   
  return (
    <div className='Container'>
   
    <div class="row ">
    <h2 class="title">
    <span class="title-word title-word-2">Skills</span>
    </h2>

    <div class="col-10 ">
      <p>I develop websites and web applications using modern javascript technologies and frameworks. 
        I focus on the responsive aspect of my work and i have a passion to attention to details and fast loading time. Here are some of the technologies that i am experienced in:
      </p>
      
<div class="wrap-circles">
  <div class="circle per-0">
    <div class="inner">0% Wael</div>
  </div>
  <div class="circle per-25">
    <div class="inner">25% kefi</div>
  </div>
  <div class="circle per-50">
    <div class="inner">50% parasol</div>
  </div>
  <div class="circle per-75">
    <div class="inner">75%</div>
  </div>
  <div class="circle per-100">
    <div class="inner">100%</div>
  </div>
</div>
    </div>

    </div>
    {/*My recent network */}
    <h2>My Recent Work</h2>
    <div class="container-fluid">
  <div class="row justify-content-md-center ">
    <div class="col-4">
    <Card  className="carde">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="col-4">
    <Card  className="carde">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="col-4">
    <Card  className="carde">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
</div>
    </div>
    )
}

export default Skills