import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function updateWord(event) {
    setWord(event.target.value);
  }

  function Searching(event) {
    event.preventDefault();
    alert(`${word}`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Searching}>
        <div className="input-group w-100 shadow">
          <input
            type="search"
            className="form-control dictionary-input"
            placeholder="Enter a word"
            autoComplete="off"
            onChange={updateWord}
          />

          <span className="input-group-text btn-searching" onClick={Searching}>
            <i className="fa-solid fa-magnifying-glass-location"></i>
          </span>
        </div>
      </form>
    </div>
  );
}
