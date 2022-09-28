import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState({});

  function searchingWord(response) {
    // console.log(`Respons.data`);
    console.log(response.data);
    setMeanings(response.data[0]);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  function Searching(event) {
    event.preventDefault();

    // documentation https://dictionaryapi.dev/

    let apiCall = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiCall).then(searchingWord);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Searching}>
        <div className="input-group w-100 shadow">
          <input
            type="search"
            className="form-control dictionary-input"
            placeholder="What word do you want to look up?"
            autoComplete="off"
            onChange={updateWord}
          />

          <span className="input-group-text btn-searching" onClick={Searching}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
      </form>

      <Results meanings={meanings} />
    </div>
  );
}
