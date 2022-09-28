import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (Object.keys(props.meanings).length > 0) {
    return (
      <div className="Results">
        <div>
          <h1 className="text-capitalize me-4">{props.meanings.word}</h1>
          <Phonetics
            phoneticAudio={props.meanings.phonetics[0].audio}
            phoneticText={props.meanings.phonetic}
          />
        </div>

        {props.meanings.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
