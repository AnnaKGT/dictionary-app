import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  //   console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="Meaning__partOfSpeech ">{props.meaning.partOfSpeech}</h3>

      {props.meaning.synonyms.map(function (synonym, index) {
        return <span key={index}>{synonym} </span>;
      })}
      <br />
      {props.meaning.antonyms.map(function (antonym, index) {
        return <span key={index}>{antonym} </span>;
      })}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="Meaning__definition">{definition.definition}</p>
            <p className="Meaning__example">{definition.example}</p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
