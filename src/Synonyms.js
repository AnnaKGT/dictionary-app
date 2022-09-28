import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <h3>Synonyms:</h3>
        <p>{props.synonyms}</p>
        <hr />
      </div>
    );
  } else {
    return null;
  }
}
