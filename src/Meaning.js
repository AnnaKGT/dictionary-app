import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  //   console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="Meaning__partOfSpeech ">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="Meaning__definition">{definition.definition}</p>
            <p className="Meaning__example">{definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
