import React from "react";
import "./Antonyms.css";

export default function Synonyms(props) {
  if (props.antonyms.length > 0) {
    return (
      <div className="Antonyms__content">
        <span className="Antonyms__title">Antonyms:</span>
        <span>
          {props.antonyms.map(function (synonym, index) {
            return (
              <div key={index} className="Antonyms">
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
