import React from "react";
import "./Antonyms.css";

export default function Synonyms(props) {
  if (props.meaning.antonyms.length > 0) {
    return (
      <span>
        {props.meaning.antonyms.map(function (synonym, index) {
          return (
            <button key={index} className="Antonyms">
              {synonym}
            </button>
          );
        })}
      </span>
    );
  } else {
    return null;
  }
}
