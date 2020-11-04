import React, { useState } from "react";
import color from "../assets/Couleur.png";

const ImageBlock = ({ text, image }) => {
  const [showText, setShowText] = useState(false);

  const displayText = () => {
    setShowText(true);
  };

  const unDisplayText = () => {
    setShowText(false);
  };

  return (
    <div
      className="imageBlock"
      onMouseOver={displayText}
      onMouseOut={unDisplayText}
    >
      {showText === true ? (
        <>
          <img src={color} className="imageHome" />
          <p className="hoverText">{text}</p>
        </>
      ) : (
        <img src={image} className="imageHome" />
      )}
    </div>
  );
};

export default ImageBlock;
