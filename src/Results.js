import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  //   console.log(props.meanings.meanings);
  if (Object.keys(props.meanings).length > 0) {
    return (
      <div className="Results">
        <h1 className="text-capitalize">{props.meanings.word}</h1>
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
