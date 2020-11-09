import React from "react";
import SlideShow from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/components/slideshow.js";
import Button from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/components/button.js";
import jf1 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/JimmyFairly/jimmyfairly1.png";
import jf2 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/JimmyFairly/jimmyfairly2.png";
import jf3 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/JimmyFairly/jimmyfairly3.png";
import jf4 from "/Users/tiphainepellet/Documents/BOULOT/Site TP/site-tiphaine/src/assets/JimmyFairly/jimmyfairly4.png";

const JimmyFairlyPage = () => {
  return (
    <div className="detailBox">
      <div className="detailContent">
        <div className="textColumn">
          <h3>Jimmy Fairly</h3>
          <h4>Création du backoffice unifié de l'entreprise</h4>
          <p>
            Jimmy Fairly est un fabricant de lunettes de vue et de lunettes
            solaires. Toutes leurs lunettes sont conçues par leur Studio à Paris
            puis assemblées à la main en France, dans leur Atelier. Le tout sans
            intermédiaire pour proposer le prix le plus juste.
          </p>
          <p>
            Dans un contexte de forte croissance, l'entreprise s'était focalisée
            sur l'ouverture de boutique, mais les process en interne étaient
            compliqués, il était temps de créer des outils afin d'améliorer
            l'éfficatité des équipes, notament pour le suivi de commande, le
            fichier client et le suivi des statistiques. J'ai travaillé en tant
            que développeur et Scrum Master sur ce projet
          </p>
          <li>Sourcing des besoins auprès des équipes</li>
          <li>Création des wireframes</li>
          <li>Choix techniques pour le front et l'organisation du code</li>
          <li>Développement web en React, Material UI, GraphQl</li>
          <li>Recettage</li>
        </div>
        <SlideShow photo1={jf1} photo2={jf2} photo3={jf3} photo4={jf4} />
      </div>
      <Button link={"https://www.jimmyfairly.com/"} />
    </div>
  );
};

export default JimmyFairlyPage;
