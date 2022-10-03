import React from "react";

import "./Meaning.css";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import Example from "./Example";

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

            <Example example={definition.example} word={props.word} />
            <Synonyms
              synonyms={definition.synonyms}
              searchRelatedWord={props.searchRelatedWord}
            />
            <Antonyms
              antonyms={definition.antonyms}
              searchRelatedWord={props.searchRelatedWord}
            />
            <hr className="Meaning__sep" />
          </div>
        );
      })}
    </div>
  );
}
