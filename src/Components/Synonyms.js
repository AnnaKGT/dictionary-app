import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="mb-2">
        <h3 className="Synomyms__title">synonyms</h3>
        <div>
          {props.synonyms.map(function (synonym, index) {
            return (
              <button key={index} className="Synonyms">
                {synonym}
              </button>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
