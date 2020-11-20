import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "../components/button";
import resco1 from "../assets/Resco/Resco1.png";
import resco2 from "../assets/Resco/Resco2.png";
import resco3 from "../assets/Resco/Resco3.png";
import resco4 from "../assets/Resco/Resco4.png";

const ResCoPage = () => {
  return (
    <div className="detailBox">
      <div className="detailContent">
        <div className="textColumn">
          <h3>Res&amp;Co</h3>
          <h4>
            Création d'une application de réservation de menus à prix réduit
            dans des restaurants pour éviter le gaspillage alimentaire.
          </h4>
          <p>
            J'ai travaillé sur ce projet en tant que product owner avec 3
            développeurs afin de concevoir le produit en fonction des besoins de
            Stephanie, la fondatrice de l'entreprise. De la compréhension du
            besoin à la livraison finale de l'appli, nous avons travaillé en
            méthodologie agile SCRUM.
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
            <img src={resco1} className="galeriePortraitImage" />
            <img src={resco2} className="galeriePortraitImage" />
            <img src={resco3} className="galeriePortraitImage" />
            <img src={resco4} className="galeriePortraitImage" />
          </Fade>
        </div>
      </div>
      <Button link={"https://www.res-and-co.fr/"} />
    </div>
  );
};

export default ResCoPage;
