import React from "react";
import "./Antonyms.css";

export default function Synonyms(props) {
  if (props.antonyms.length > 0) {
    return (
      <div>
        <h3 className="Antonyms__title">antonyms</h3>
        <span>
          {props.antonyms.map(function (synonym, index) {
            return (
              <button key={index} className="Antonyms">
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
