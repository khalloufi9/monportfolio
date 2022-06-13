import React from 'react'
import './Accueil.css'
import foto from '../foto.jpg'
const Accueil = () => {
  return (
    <div className='Container'>
    <div className='row '>
    <div class="col-8">
    <h2 class="title">
    <span class="title-word title-word-1">Hello</span>
    <span class="title-word title-word-2">I'm </span>
    <span class="title-word title-word-3">Khalloufi</span>
    <span class="title-word title-word-4">Oumaima</span>
  </h2>
    <p>I'am a  Fullstack Web   located in Bizerte, Tunisia. with one years of experience developping websites and web applications using javaScript technologies.
        I have a license degree in management computing from the ISG of tunisia</p>
    </div>
    <div class="col-4" >
    <img className='image-profile' src={foto}/>
    </div>
    </div>

    {/*education background*/}
    <h2 class="title">
    <span class="title-word title-word-1">Experiences</span>
    
  </h2>

    <div className='row '>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuEvFGdNC2blaxURpCRjLI5UYXV27PyOeINaiGkPskKmdyeKWB76wCWe0HRWLr0nHjYc&usqp=CAU" alt="Avatar" />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
    </div>
     </div>
     <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://t4.ftcdn.net/jpg/01/45/28/35/360_F_145283554_qj0Cb39q114ul3xKqfrcVXIFRDoM63hm.jpg" alt="Avatar" />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
    </div>
     </div>
     <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://cbk.bschool.cuhk.edu.hk/wp-content/uploads/innovation-and-new-ideas-lightbulb-concept-picture-id1160614772-1.jpg" alt="Avatar" />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
    </div>
     </div>

   
  

    </div> 
    </div>
  )
}

export default Accueil