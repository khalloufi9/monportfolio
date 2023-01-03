import React from 'react'
import { Link } from 'react-router-dom'
import './Accueil.css'
const Education = () => {
  return (
    <div>
    <div className=" container skills">
    <div className="row row-skills">
      <div class="skills-container">
      <button className="button-trans">
            Compétences
      </button>
      <Link to="/education"> 
      <button className="btn-skills hover-in-shadow  outer-shadow">Education</button>
      </Link>
      <button className="button-trans">Expérience</button>
      </div>
    </div>
  </div>
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
    </div>

  )
}

export default Education