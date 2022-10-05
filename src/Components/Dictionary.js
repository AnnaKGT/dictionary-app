import React, { useState, useEffect } from "react";
import axios from "axios";
import Phonetics from "./Phonetics";
import Results from "./Results.js";
import Photos from "./Photos";
import ResultsAll from "./ResultsAll.js";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [phonetics, setPhonetics] = useState({});
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [all, setAll] = useState([]);

  useEffect(() => {
    setLoaded(false);
  }, [word]);

  const searchingDictionaryWord = (response) => {
    setAll(response.data);
    setPhonetics(response.data[0].phonetics);
  };

  const searchingPexelWord = (response) => {
    setPhotos(response.data.photos);
  };

  const search = () => {
    // documentation https://dictionaryapi.dev/
    let apiCall = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios
      .get(apiCall)
      .then(searchingDictionaryWord)
      .catch((error) => {
        return alert(
          "Sorry, but this word is absent in the Dictionary. Try another one 🤗"
        );
      });

    const pexelsAPIKey =
      "563492ad6f917000010000011471bb1500a341eb872ed288b6e6367a";
    // "563492ad6f917000010000015888ae2855384a059cdc24187c49a20d";

    let pexelsAPICall = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    axios
      .get(pexelsAPICall, {
        headers: { Authorization: `Bearer ${pexelsAPIKey}` },
      })
      .then(searchingPexelWord);
  };

  let inputWord = " ";

  const searchingSubmit = (event) => {
    event.preventDefault();
    setWord(inputWord);
    search();
  };

  const updateWord = (event) => {
    inputWord = event.target.value;
  };

  const searchRelatedWord = (string) => {
    setWord(string);
  };

  const load = () => {
    setLoaded(true);
    search();
  };

  if (loaded) {
    return (
      <div className="Dictionary">
        <h2 className="dictionary__titleInput">
          What word do you want to look up?
        </h2>
        <form className="dictionary__form" onSubmit={searchingSubmit}>
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

        <div className="Dictionary__word">
          <h1 className="text-capitalize">{word}</h1>
          <Phonetics phonetics={phonetics} />
        </div>

        {/* <Results
          meanings={meanings}
          word={word}
          searchRelatedWord={searchRelatedWord}
        /> */}
        <ResultsAll
          data={all}
          word={word}
          searchRelatedWord={searchRelatedWord}
        />
        <Photos photos={photos} word={word} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
