import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (Object.keys(props.meanings).length > 0) {
    return (
      <div className="Results">
        <div className="Results__word">
          <h1 className="text-capitalize">{props.meanings.word}</h1>
          <Phonetics phonetics={props.meanings.phonetics} />
        </div>

        {props.meanings.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} word={props.word} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
