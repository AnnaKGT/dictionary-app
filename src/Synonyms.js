import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.meaning.synonyms.length > 0) {
    return (
      <div>
        <span>
          {props.meaning.synonyms.map(function (synonym, index) {
            return (
              <button key={index} className="Synonyms">
                {synonym}
              </button>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
