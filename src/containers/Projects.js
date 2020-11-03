import React from "react";
import forcefemmes from "../assets/forcefemmes.png"
import jimmyfairly from "../assets/jimmyfairly.png"
import maboite from "../assets/Maboite2.png"
import resco from "../assets/res&co.png"
import verslemploi from "../assets/verslemploi.jpg"
import bayon from "../assets/bayon.png"

function Projects() {
  return (
    <div className="page">
        <div className="homeContent">
            <div className="line">
                <div>
                <img src={forcefemmes} className="imageHome" />
                </div>
                <div>
                <img src={jimmyfairly} className="imageHome" />
                </div> 
                <div>
                <img src={maboite} className="imageHome" />
                </div> 
            </div>
            <div className="line">
                <div>
                <img src={resco} className="imageHome" />
                </div>
                <div>
                <img src={verslemploi} className="imageHome" />
                </div> 
                <div>
                <img src={bayon} className="imageHome" />
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Projects;
