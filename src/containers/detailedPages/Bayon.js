import React from "react";
import Button from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/components/button.js";
import bayon from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/bayon2.jpg";

const BayonPage = () => {
  return (
    <div className="detailBox">
      <div className="detailContent">
        <div className="textColumn">
          <h3>Bayon Education</h3>
          <h4>Création d'un livre de pâtisserie</h4>
          <p>
            Bayon Education est une asssociation franco-khmère qui agit pour
            l'éducation des jeunes filles notament avec une formation
            professionnelle d'un an en pâtisserie leur permettant de trouver un
            emploi à la find e la formation.
          </p>
          <p>
            Afin de participer au financement de cette formation, j'ai travaillé
            sur un projet de livre de pâtisserie avec la chef pâtissière pour
            les recettes, ainsi qu'un photographe. Le livre composé de 38
            recettes de desserts kmères mais aussi des recettes occidentales,
            nous transporte au coeur du Cambodge en suivant l'histoire d'une
            jeune étudiante.
          </p>
          <br />
          <li>Gestion de projet</li>
          <li>Écriture et organisation du livre</li>
          <li>Mise en page du livre sur adobe in design</li>
          <li>Partenariats et plan de communication</li>
          <br />
          <h5 style={{ fontStyle: "italic", color: "var(--green)" }}>
            Plus de 2000 livres vendus en version française et 1000 en version
            anglaise
          </h5>
        </div>
        <img src={bayon} />
      </div>
      <Button
        link={"http://ecoledubayon.org/actions/le-livre-de-patisserie/"}
      />
    </div>
  );
};

export default BayonPage;
