import React from "react";
import "./Accueil.css";
import {Facebook,Instagram,Linkedin,Github} from 'react-bootstrap-icons'
import foto from "../foto.jpg";
import Portfolio from "../Portfolio.PNG"
import Kardi from "../kardi.PNG"
import Starfo from "../starfo.PNG"
import Nero from "../nero.PNG"
import {Link} from 'react-router-dom'

const Accueil = () => {
  return (
    <div>
      <div class="container header">
        <div className="row header-small">
          <div className="col-md-6 d-flex">
            <div className="header-descreption">
              <span className="title-span">Hello</span>
              <h1 className="title-h1">I'm Oumaima</h1>
              <p className="parag">Web Designer & Developper</p>
              <button className="btn-home outer-shadow hover-in-shadow">
                More About Me
              </button>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="inner-shadow header-img-container">
              <img className="foto outer-shadow" src={foto} alt="oum" />
            </div>
          </div>
        </div>
      </div>

      {/*div2 */}
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
      {/*div3 */}
      <div className=" container skills">
        <div className="row row-skills">
          <div class="skills-container">
          <button className="btn-skills hover-in-shadow  outer-shadow">
                Compétences
          </button>
          <Link to="/education"> 
          <button className="button-trans">Education</button>
          </Link>
          <button className="button-trans">Expérience</button>
          </div>
          <div className="col-md-6 bar-progress-Container">
          <div>
          <div style={{marginBottom:"10px",color:"gray"}}>
           <span>Html</span>
           <span style={{marginLeft:"70%"}}>80%</span>
           </div>
           <div className="inner-shadow bar-progress">
            <div className="bar-progress-color" style={{width:"80%"}}></div>
           </div>
          </div>
          <div>
          <div style={{marginBottom:"10px",color:"gray"}}>
           <span>Css</span>
           <span style={{marginLeft:"62%"}} >70%</span>
           </div>
           <div className="inner-shadow bar-progress">
            <div className="bar-progress-color" style={{width:"70%"}}></div>
           </div>
          </div>
          <div>
          <div style={{marginBottom:"10px",color:"gray"}}>
           <span>Javascript</span>
           <span style={{marginLeft:"62%"}} >80%</span>
           </div>
           <div className="inner-shadow bar-progress">
            <div className="bar-progress-color" style={{width:"80%"}}></div>
           </div>
          </div>
          <div>
          <div style={{marginBottom:"10px",color:"gray"}}>
           <span>Bootstrap</span>
           <span style={{marginLeft:"45%"}} >60%</span>
           </div>
           <div className="inner-shadow bar-progress">
            <div className="bar-progress-color" style={{width:"60%"}}></div>
           </div>
          </div>
          
             
</div>
          {/*2 */}
          <div className="col-md-6 bar-progress-Container">
          <div>
          <div style={{marginBottom:"10px",color:"gray"}}>
           <span>Node Js</span>
           <span style={{marginLeft:"60%"}}>75%</span>
           </div>
           <div className="inner-shadow bar-progress">
            <div className="bar-progress-color" style={{width:"75%"}}></div>
           </div>
          </div>
          <div>
          <div style={{marginBottom:"10px",color:"gray"}}>
           <span>Mongo DB</span>
           <span style={{marginLeft:"52%"}} >70%</span>
           </div>
           <div className="inner-shadow bar-progress">
            <div className="bar-progress-color" style={{width:"70%"}}></div>
           </div>
          </div>
          <div>
          <div style={{marginBottom:"10px",color:"gray"}}>
           <span>React Js</span>
           <span style={{marginLeft:"62%"}} >80%</span>
           </div>
           <div className="inner-shadow bar-progress">
            <div className="bar-progress-color" style={{width:"80%"}}></div>
           </div>
          </div>
          </div>
        </div>
      </div>
      {/*div4 */}
   
      <div class="container box-container">
      <div class="row">
      <div class="col-md-6 ">
      <div className="box1 outer-shadow">
      <div style={{textAlign:"end"}}>
      <span className="date-box">Mai 2022- Septembre 2022</span>
      <h5 className="title-box">Dévelopeur Full Stack</h5>
      <p className="parag-box">Trivaw</p>
      <p className="parag-box">
        Conception de l'architecture d'un projet informatique
      </p>
      <p className="parag-box">
        Gestion des bases de données
      </p>
      <p className="parag-box">
        Développement du front-end et du back-end di site/application web
      </p>
     </div>
      </div>
    </div>
  </div>

  <div class="row " >
    <div class="col-md-6 colonne-left" >
     <div className="box1 outer-shadow"> 
     <div>
      <span className="date-box">janvier 2019-Mars 2022</span>
      <h5 className="title-box">Planificateur du production</h5>
      <p className="parag-box">Martelli Tunisia</p>
      <p className="parag-box">
        Suivi, ajustement et modification du planning de production par jour
      </p>
      <p className="parag-box">
      Coordination et négociation avec les différents services (production, achats, logistique)
      </p>
      <p className="parag-box">
        Préparation les factures d'exportation
      </p>
      
     </div>
     </div>
 </div>
 </div>
   
 <div class="row">
    <div class="col-md-6 ">
      <div className="box1 outer-shadow">
      <div style={{textAlign:"end"}}>
      <span className="date-box">Mai 2019-Janvier 2020</span>
      <h5 className="title-box">Responsable Financiére</h5>
      <p className="parag-box">Skm Plast</p>
      <p className="parag-box">
        Gérer et enregistrer les opérations d'achats
      </p>
      <p className="parag-box">
        Gérer le pointage des employés
      </p>
     </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 colonne-left ">
      <div className="box1 outer-shadow">
      <div style={{textAlign:"start"}}>
      <span className="date-box">Avr 2017-Janvier 2017</span>
      <h5 className="title-box">Stagiaire Projet Fin D'etudes</h5>
      <p className="parag-box">Tunisie Télécom</p>
      <p className="parag-box">
        Developper une application décesionnelle (Business Intelligence) pour analyser les lignes téléphoniques fixes
      </p>
      
     </div>
      </div>
    </div>
  </div>

      </div>
     {/*div5*/}

     <div class="container">
     <div class="About-container">
            <span className="title-main">Services</span>
            <h2 className="About-h2">WHAT I DO</h2>
     </div>
     <div className=" container row">
     <div className="col-md-4 ">
      <div className="container-whatido outer-shadow">
      <div className="containerIcon  inner-shadow">
        <img  className="iconWhatido" src="https://cdn-icons-png.flaticon.com/512/3939/3939992.png"/>
      </div>
      <span className="title-whatido">Clean Code</span>
      <p className="parag-box">le processus d'éxécution de l'ensemble de l'application est logique et structuré de facon simple</p>
      </div>
      
     </div>
     <div className="col-md-4 ">
     <div className="container-whatido outer-shadow">
      <div className="containerIcon  inner-shadow">
        <img  className="iconWhatido" src="https://cdn-icons-png.flaticon.com/512/2777/2777142.png"/>
      </div>
      <span className="title-whatido">Responsive Design</span>
      <p className="parag-box">Site web dont la conception, grace a différentes principes et techniques, a offrir une consultation confortable sur des écrans de taille différentes</p>
      </div>
     </div>
     <div className="col-md-4">
     <div className="container-whatido outer-shadow">
     <div className="containerIcon  inner-shadow">
        <img  className="iconWhatido" src="https://cdn-icons-png.flaticon.com/512/2920/2920242.png"/>
      </div>
      <span className="title-whatido">Web Design</span>
      <p className="parag-box"> Offrir d'un interface web ergonomique et un design adapté au contenu d'un site internet donné</p>
      </div>
     </div>
     </div>

     </div>

    {/*div6*/}

    <div class="container">
     <div class="About-container">
            <span className="title-main">Portfolio</span>
            <h2 className="About-h2">LATEST WORKS</h2>
     </div>
     <div className=" container row">
     <div className="col-md-4 ">
      <div className="container-whatido outer-shadow">
      <img  className="image-portfolio" src={Kardi} alt="kardi"/>
      <span className="title-portfolio">Kardi.tn</span>
      </div>
      
     </div>
     <div className="col-md-4 ">
     <div className="container-whatido outer-shadow">
     <img  className="image-portfolio" src={Portfolio} alt="portfolio"/>
      <span className="title-portfolio">Personal Portfolio</span>
      </div>
     </div>
     <div className="col-md-4">
     <div className="container-whatido outer-shadow">
     <img  className="image-portfolio" src={Starfo} alt="portfolio"/>
      <span className="title-portfolio">Starfo.tn</span>
      </div>
     </div>
     <div className="col-md-4">
     <div className="container-whatido outer-shadow">
     <img  className="image-portfolio" src={Nero} alt="portfolio"/>
      <span className="title-portfolio">NeroGiardini</span>
      </div>
     </div>
     </div>
     </div>

     {/*div7 */}
     <div class="container">
     <div class="About-container">
            <span className="title-main">Contact</span>
            <h2 className="About-h2">GET IN TOUCH</h2>
     </div>
     <div className=" container row">
     <div className="col-md-4 ">
      <div className="container-contact outer-shadow">
      <div className="containerIcon  ">
        <img  className="iconWhatido" src="https://cdn-icons-png.flaticon.com/512/126/126509.png" alt="icon-contact"/>
      </div>
      <span className="title-whatido">Phone</span>
      <span className="title-whatido">+216 95 131 105</span>

      </div>
      
     </div>
     <div className="col-md-4 ">
     <div className="container-contact outer-shadow">
     <div className="containerIcon  ">
      <img  className="iconWhatido" src="https://cdn-icons-png.flaticon.com/512/3059/3059421.png" alt="email"/>
      </div>
      <span className="title-whatido">Email</span>
      <span className="title-whatido">khalloufioumaima1995@gmail.com</span>


      </div>
     </div>
     <div className="col-md-4">
     <div className="container-contact outer-shadow">
     <div className="containerIcon ">
        <img  className="iconWhatido" src="https://cdn-icons-png.flaticon.com/512/446/446075.png" alt="adress"/>
      </div>
      <span className="title-whatido">Adress</span>
      <span className="title-whatido">Gratte-ciel Bizerte N°82</span>

      </div>
     </div>
     </div>

     </div>


</div>


       
     
    
  );
};

export default Accueil;
