import React from "react";
import SlideShow from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/components/slideshow.js";
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
          création d'entreprise.
        </p>
        <br />
        <p>
          Dans une démarche de modernisation de leurs outils de communication,
          j'ai réalisé la refonte de leur site web qui datait de plus de 10 ans
          et qui n'était ni responsive, ni à jour. Il n'y avait aucun moyen de
          faire un blog avec les actualités alors que l'association en avait
          beaucoup !
        </p>
        <br />
        <li>Audit de l'outil existant</li>
        <li>Réorganisation de l'architecture du site</li>
        <li>Refonte totale du site via wordpress</li>
        <li>Création de contenu</li>
        <li>Référencement</li>
        <br />
        <h4>Voir le site</h4>
      </div>
      <SlideShow photo1={ff1} photo2={ff2} photo3={ff3} photo4={ff4} />
    </div>
  );
};

export default ForceFemmesPage;
