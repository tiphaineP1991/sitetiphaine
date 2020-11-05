import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import resco1 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Resco/Resco1.png";
import resco2 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Resco/Resco2.png";
import resco3 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Resco/Resco3.png";
import resco4 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Resco/Resco4.png";

const ResCoPage = () => {
  return (
    <div className="detailContent">
      <div className="textColumn">
        <h3>Res&amp;Co</h3>
        <h4>
          Création d'une application de réservation de menus à prix réduits dans
          des restaurants pour éviter le gaspillage alimentaire
        </h4>
        <br />
        <p>
          Stéphanie jeune entrepreneure avait besoin d'un mvp. J'ai travaillé en
          tant que product owner avec 3 développeur afin de concevoir le
          produit.
        </p>
        <br />
        <li>Sourcing des besoins</li>
        <li>Rédaction du cahier des charges fonctionnel</li>
        <li>Choix de la solution techniques</li>
        <li>Réalisation des wireframes et du parcours utilisateur</li>
        <li>
          Organisation du développement en méthodologie agile Scrum avec les
          développeurs
        </li>
        <li>Priorisation et gestion du backlog</li>
        <li>Cahier des recettes</li>
      </div>
      <div className="galeriePortrait">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={resco1} className="galeriePortraitImage" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={resco2} className="galeriePortraitImage" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={resco3} className="galeriePortraitImage" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={resco4} className="galeriePortraitImage" />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ResCoPage;
