import React from "react";
import SlideShow from "../components/slideshow.js";
import Button from "../components/button";
import ff1 from "../assets/Forcefemmes/ForceFemmes1.png";
import ff2 from "../assets/Forcefemmes/ForceFemmes2.png";
import ff3 from "../assets/Forcefemmes/ForceFemmes3.png";
import ff4 from "../assets/Forcefemmes/ForceFemmes4.png";

const ForceFemmesPage = () => {
  return (
    <div className="detailBox">
      <div className="detailContent">
        <div className="textColumn">
          <h3>Force Femmes</h3>
          <h4>Refonte intégrale du site web instutionnel sur WordPress</h4>
          <p>
            Force Femmes est une association qui accompagne les femmes de plus
            de 45 ans au chômage dans leur démarche de retour à l'emploi ou de
            création d'entreprise.
          </p>
          <p>
            Dans un contexte de modernisation de leurs outils de communication,
            j'ai réalisé la refonte de leur site web qui datait de plus de 10
            ans et qui n'était plus fonctionnel. Après un audit des besoins,
            j'ai réalisé un cahier des charges fonctionnel et technique puis ai
            réalisé le site sur WordPress.
          </p>
          <br />
          <li>Audit de l'outil existant</li>
          <li>Réorganisation de l'architecture du site</li>
          <li>Refonte totale du site via wordpress</li>
          <li>Création de contenu</li>
          <li>Référencement</li>
          <br />
        </div>
        <SlideShow photo1={ff1} photo2={ff2} photo3={ff3} photo4={ff4} />
      </div>
      <Button link={"http://www.forcefemmes.com"} />
    </div>
  );
};

export default ForceFemmesPage;
