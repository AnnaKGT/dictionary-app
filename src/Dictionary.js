import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [meanings, setMeanings] = useState({});

  const [loaded, setLoaded] = useState(false);
  const [allmeanings, setAllmeaning] = useState([]);

  function searchingWord(response) {
    // console.log(`Respons.data`);
    // console.log(response.data);
    setMeanings(response.data[0]);
    setAllmeaning(response.data);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  function search() {
    // documentation https://dictionaryapi.dev/
    let apiCall = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiCall).then(searchingWord);
  }

  function searchingSubmit(event) {
    event.preventDefault();
    search();
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h2 className="dictionary__titleInput">
          What word do you want to look up?
        </h2>
        <form onSubmit={searchingSubmit}>
          <div className="input-group w-100">
            <input
              type="search"
              className="form-control dictionary-input"
              placeholder="Enter a word"
              autoComplete="off"
              onChange={updateWord}
            />

            <span
              className="input-group-text btn-searching"
              onClick={searchingSubmit}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </form>

        <Results meanings={meanings} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
