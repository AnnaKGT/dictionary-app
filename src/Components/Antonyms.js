import React from "react";
import "./Antonyms.css";

export default function Synonyms(props) {
  if (props.antonyms.length > 0) {
    return (
      <div className="Antonyms__content">
        <span className="Antonyms__title">Antonyms:</span>
        <span>
          {props.antonyms.map(function (synonym, index) {
            function handleClick(event) {
              event.preventDefault();
              props.searchRelatedWord(synonym);
            }
            return (
              <div key={index} className="Antonyms" onClick={handleClick}>
                {synonym}
              </div>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
