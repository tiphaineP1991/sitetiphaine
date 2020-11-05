import React from "react";
import SlideShow from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/components/slideshow.js";
import maboite1 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Maboite/maboite1.png";
import maboite2 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Maboite/maboite2.png";
import maboite3 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Maboite/maboite3.png";
import maboite4 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/Maboite/maboite4.png";

const MaBoitePage = () => {
  return (
    <div className="detailContent">
      <div className="textColumn">
        <h3>Ma Boîte</h3>
        <h4>
          Gestion et développement d'un site de formation elearning pour les
          femmes entrepreneures
        </h4>
        <br />
        <p>
          Ma Boîte, est une plateforme d’e-learning entièrement pensée pour les
          entrepreneuses. Composé d’une dizaine de modules réalisés par des
          professionnels aguerris, ce site se veut concret, pratique et
          stimulant. Il couvre toutes les étapes incontournables pour monter son
          projet de création d’entreprise : de sa définition, en passant par son
          montage et sa mise en place.
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
        <h4>
          1 an après le lancement, 4000 femmes avaient suivi la formation soit
          +200% vs objectif
        </h4>
        <br />
        <h4>Voir le site</h4>
      </div>
      <SlideShow
        photo1={maboite1}
        photo2={maboite2}
        photo3={maboite3}
        photo4={maboite4}
      />
    </div>
  );
};

export default MaBoitePage;
