import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms__content">
        <span className="Synonyms__title">Synonyms:</span>
        <span>
          {props.synonyms.map(function (synonym, index) {
            return (
              <div key={index} className="Synonyms">
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
