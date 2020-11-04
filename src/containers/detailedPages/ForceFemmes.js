import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ff1 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Forcefemmes/ForceFemmes1.png";
import ff2 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Forcefemmes/ForceFemmes2.png";
import ff3 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Forcefemmes/ForceFemmes3.png";
import ff4 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Forcefemmes/ForceFemmes4.png";

const ForceFemmesPage = () => {
  return (
    <div className="detailContent">
      <div className="textColumn">
        <h3>Force Femmes</h3>
        <h4>Refont du site web instutionnel</h4>
        <br />
        <p>
          Force Femmes est une association qui accompagne les femmes de plus de
          45 ans au chômage dans leur démarche de retour à l'emploi ou de
          création d'entreprise
        </p>
        <br />
        <p>
          Dans une démarche de modernisation de leurs outils de communication,
          refonte du site web qui datait de plus de 10 ans et n'était ni
          responsive, ni à jour
        </p>
        <br />
        <li>Audit de l'outil existant</li>
        <li>Réorganisation de l'architecture du site</li>
        <li>Refonte totale du site via wordpress</li>
        <li>Création de contenu</li>
        <li>Référencement</li>
      </div>
      <div className="galerie">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={ff1} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={ff2} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={ff3} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ForceFemmesPage;
