import React from "react";
import SlideShow from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/components/slideshow.js";
import verslemploi1 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Verslemploi/Verslemploi1.png";
import verslemploi2 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Verslemploi/Verslemploi2.png";
import verslemploi3 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Verslemploi/Verslemploi3.png";
import verslemploi4 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Verslemploi/Verslemploi4.png";

const VerslEmploiPage = () => {
  return (
    <div className="detailContent">
      <div className="textColumn">
        <h3>Vers l'Emploi</h3>
        <h4>
          Gestion et développement d'un site de formation elearning pour les
          femmes qui souhaitent retrouver du travail ou sont en reconversion
          professionnelle.
        </h4>
        {/* <br />
        <p>
          Vers l'Emploi, est une plateforme d’e-learning une plateforme
          d’e-learning gratuite d’accompagnement au retour à l’emploi.
          Construite et conçue grâce à des experts, Vers l'Emploi propose un
          parcours de formation en 4 étapes : Construire son projet
          professionnel , Créer ses outils et exprimer sa motivation, Gagner en
          aisance et optimiser sa présentation orale, Être efficace dans ses
          recherches et améliorer sa visibilité.
        </p> */}
        <br />
        <li>Etude de marché et de faisabilité afin de définir le projet</li>
        <li>
          Définition d'un planning et d'un budget prévisionnel et recherche de
          partenaires
        </li>
        <li>
          Selection des prestataires externes : l'Associé pour la partie
          graphique et CBI consulting pour la partie développement
        </li>
        <li>Pilotage des prestataires selon la méthodologie Agile SCRUM</li>
        <li>UI UX design</li>
        <li>Création du contenu avec des experts de l'entrepreneuriat</li>
        <li>Recettage du site</li>
        <li>Réalisation du plan de communication pour le lancement</li>
        <li>Réferencement du site</li>
        <li>Suivi et améalioration du produit</li>
        <br />
        <h4>
          1 an après le lancement, 4000 femmes avaient suivi la formation soit
          +200% vs objectif
        </h4>
        <br />
        <h4>Voir le site</h4>
      </div>
      <SlideShow
        photo1={verslemploi1}
        photo2={verslemploi2}
        photo3={verslemploi3}
        photo4={verslemploi4}
      />
    </div>
  );
};

export default VerslEmploiPage;
