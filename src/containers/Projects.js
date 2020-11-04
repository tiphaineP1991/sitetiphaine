import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ImageBlock from "../components/imageBlock";
import forcefemmes from "../assets/forcefemmes.png";
import jimmyfairly from "../assets/jimmyfairly.png";
import maboite from "../assets/maboite.png";
import resco from "../assets/res&co.png";
import verslemploi from "../assets/verslemploi.jpg";
import bayon from "../assets/bayon.png";

const Projects = ({ setProjectName }) => {
  const history = useHistory();

  return (
    <div className="page">
      <div className="homeContent">
        <div className="line">
          <div
            onClick={() => {
              setProjectName("forcefemmes");
              history.push("/details");
            }}
          >
            <ImageBlock
              text={"Refonte intégrale du Site web Force Femmes"}
              image={forcefemmes}
            />
          </div>
          <div
            onClick={() => {
              setProjectName("jimmyfairly");
              history.push("/details");
            }}
          >
            <ImageBlock
              text={"Création du BackOffice de l'entreprise"}
              image={jimmyfairly}
            />
          </div>
          <div
            onClick={() => {
              setProjectName("resco");
              history.push("/details");
            }}
          >
            <ImageBlock
              text={
                "Pilotage et développement d'une appli antigaspi pour Res&Co"
              }
              image={resco}
            />
          </div>
        </div>
        <div className="line">
          <div
            onClick={() => {
              setProjectName("maboite");
              history.push("/details");
            }}
          >
            <ImageBlock
              text={
                "Pilotage projet Ma Boîte - la formation digitale des entrepreneuses"
              }
              image={maboite}
            />
          </div>
          <div
            onClick={() => {
              setProjectName("verslemploi");
              history.push("/details");
            }}
          >
            <ImageBlock
              text={
                "Pilotage projet Vers L'Emploi - site e-learning d'accompagnement au retour à l'emploi pour les femmes au chômage"
              }
              image={verslemploi}
            />
          </div>
          <div
            onClick={() => {
              setProjectName("bayon");
              history.push("/details");
            }}
          >
            <ImageBlock
              text={
                "Pilotage et design du livre de cuisine `Les Pâtisseries du Bayon`"
              }
              image={bayon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
