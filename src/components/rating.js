import React from "react";
import Rating from "@material-ui/lab/Rating";

const RatingStars = ({ competence, grade }) => {
  return (
    <div className="competence">
      <p className="competences">{competence}</p>
      <div className="rating">
        <Rating name="read-only" value={grade} readOnly />
      </div>
    </div>
  );
};

export default RatingStars;
