import React from "react";

import "./Meaning.css";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="Meaning__partOfSpeech ">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="mb-2" key={index}>
            <p className="Meaning__definition">
              <i className="fa-solid fa-check Meaning__definitionCheck"></i>
              {definition.definition}
            </p>
            <p className="Meaning__example mb-1">{definition.example}</p>
            <Synonyms synonyms={definition.synonyms} />
            <Antonyms antonyms={definition.antonyms} />
            <hr className="Meaning__sep" />
          </div>
        );
      })}
    </div>
  );
}
