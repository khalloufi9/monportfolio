import React from 'react'
import './Accueil.css'
import {Facebook,Instagram,Linkedin,Github} from 'react-bootstrap-icons'
import foto from "../foto.jpg";
import Portfolio from "../Portfolio.PNG"
import Kardi from "../kardi.PNG"
import Starfo from "../starfo.PNG"
import Nero from "../nero.PNG"
const propos = () => {
  return (
    <div className="container">
    <div className="row row-container ">
      <div class="About-container">
        <span className="title-main">Main Info</span>
        <h2 className="About-h2">About Me</h2>
      </div>

      <div className="col-md-5">
        <div className="inner-shadow body-img-container">
          <img
            src={foto}
            alt="oum-2"
            className=" foto-carre outer-shadow"
          />
          <div className="icon-About">
            <Facebook className="logo" size={20}/>
            <Instagram className="logo" size={20}/>
            <Linkedin className="logo" size={20}/>
            <Github className="logo" size={20}/>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <p className="About-parag">
         <span>Salut ! Je suis Oumaima. Je suis développeuse web.</span>  Passionné 
          toujours par l’univers du web et des nouvelles technologies, je me
          suis très rapidement orienté dans ce domaine jusqu’à l’obtention
          de mon diplome en informatique . Les sites internet et leur
          interactivité avec les internautes m’ont toujours particulièrement
          intéressé.
          </p>
          <p className="About-parag"> 
          Mes premières expériences m'ont permis de consolider
          mes connaissances et compétences. Motivation, sens de la rigueur
          et de l’écoute sont mes principales qualités dans le monde
          professionnel.
          </p>
          <button className="btn-home outer-shadow hover-in-shadow">
            Télécharger CV
          </button>
      </div>

      <div></div>
    </div>
  </div>
  )
}

export default propos