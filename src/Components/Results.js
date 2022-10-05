import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (Object.keys(props.meanings).length > 0) {
    return (
      <div className="Results">
        {props.meanings.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning
                meaning={meaning}
                word={props.word}
                searchRelatedWord={props.searchRelatedWord}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
