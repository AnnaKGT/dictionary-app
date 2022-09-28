import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

import "./Results.css";

export default function Results(props) {
  console.log(props.meanings);
  if (Object.keys(props.meanings).length > 0) {
    return (
      <div className="Results">
        <div className="Results__word">
          <h1 className="text-capitalize">{props.meanings.word}</h1>
          <Phonetics
            phoneticAudio={props.meanings.phonetics[0].audio}
            phoneticText={props.meanings.phonetic}
          />
        </div>

        <div className="Results__synonyms mb-3 ">
          <h2 className="fw-bold">Synonyms</h2>
          <span>
            {props.meanings.meanings.map(function (meaning, index) {
              return (
                <span key={index}>
                  <Synonyms meaning={meaning} />
                </span>
              );
            })}
          </span>
        </div>

        <div className="Results__antonyms mb-3">
          <h2 className="fw-bold">Antonyms</h2>
          <span>
            {props.meanings.meanings.map(function (meaning, index) {
              return (
                <span key={index}>
                  <Antonyms meaning={meaning} />
                </span>
              );
            })}
          </span>
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
