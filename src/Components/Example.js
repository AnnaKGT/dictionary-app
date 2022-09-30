import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    let exampleSentence = props.example.split(" ");

    for (let i = 0; i < exampleSentence.length; i++) {
      if (exampleSentence[i].toLowerCase().includes(props.word)) {
        exampleSentence[i] = (
          <strong className="Example__word">{exampleSentence[i]}</strong>
        );
      }
    }

    return (
      <div className="Example">
        <p>
          {exampleSentence.map((string, index) => {
            return <span key={index}>{string} </span>;
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
