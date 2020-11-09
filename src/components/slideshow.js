import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShow = ({ photo1, photo2, photo3, photo4 }) => {
  return (
    <div className="galerie">
      <Fade>
        <img src={photo1} className="galerieImage" />
        <img src={photo2} className="galerieImage" />
        <img src={photo3} className="galerieImage" />
        <img src={photo4} className="galerieImage" />
      </Fade>
    </div>
  );
};

export default SlideShow;
