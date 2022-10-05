import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms__content">
        <span className="Synonyms__title">Synonyms:</span>
        <span>
          {props.synonyms.map((synonym, index) => {
            const handleClick = (event) => {
              event.preventDefault();
              props.searchRelatedWord(synonym);
            };
            return (
              <span key={index} className="Synonyms" onClick={handleClick}>
                {synonym}
              </span>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
