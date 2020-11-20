import React from "react";
import SlideShow from "../components/slideshow.js";
import Button from "../components/button";
import verslemploi1 from "../assets/Verslemploi/Verslemploi1.png";
import verslemploi2 from "../assets/Verslemploi/Verslemploi2.png";
import verslemploi3 from "../assets/Verslemploi/Verslemploi3.png";
import verslemploi4 from "../assets/Verslemploi/Verslemploi4.png";

const VerslEmploiPage = () => {
  return (
    <div className="detailBox">
      <div className="detailContent">
        <div className="textColumn">
          <h3>Vers l'Emploi</h3>
          <h4>
            Gestion du projet de création d'un site de formation elearning
            d’accompagnement au retour à l’emploi et reconversion
            professionnelle
          </h4>
          <p>
            Construite et conçue avec à des experts, Vers l'Emploi propose un
            parcours de formation en ligne en 4 étapes : Construire son projet
            professionnel , Créer ses outils et exprimer sa motivation, Gagner
            en aisance et optimiser sa présentation orale, Être efficace dans
            ses recherches et améliorer sa visibilité.
          </p>
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
          <h5 style={{ fontStyle: "italic", color: "var(--green)" }}>
            6 mois après le lancement, 2300 femmes avaient suivi la formation
            dont 74% étaient sans emploi.
          </h5>
        </div>
        <SlideShow
          photo1={verslemploi1}
          photo2={verslemploi2}
          photo3={verslemploi3}
          photo4={verslemploi4}
        />
      </div>
      <Button link={"https://www.verslemploi.fr"} />
    </div>
  );
};

export default VerslEmploiPage;
