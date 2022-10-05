import React from "react";
import Results from "./Results";

export default function Try(props) {
  if (props.data) {
    return (
      <div>
        {props.data.map((data, index) => {
          return (
            <div key={index}>
              <Results
                meanings={data}
                word={props.word}
                searchRelatedWord={props.searchRelatedWord}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
