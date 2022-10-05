import React from "react";

//https://www.npmjs.com/package/howler
import { Howl } from "howler";
import "./Phonetics.css";

export default function Phonetics(props) {
  let phonet_text = " ";
  let phonet_audio = " ";

  let i = 0;

  while (i < Object.keys(props.phonetics).length) {
    if (phonet_text === " " && props.phonetics[i].text) {
      phonet_text = props.phonetics[i].text;
    }

    if (phonet_audio === " " && props.phonetics[i].audio) {
      phonet_audio = props.phonetics[i].audio;
    }

    i++;
  }

  const sound = new Howl({
    autoSuspend: true,
    html5: true,
    html5PoolSize: 10,
    loop: false,
    preload: true,
    src: [phonet_audio],
    volume: 0.5,
  });

  function PlaySound() {
    sound.play();
    sound.once("end", function () {
      sound.pause();
    });
  }

  return (
    <div className="phonetics">
      <span className="phonetics__text">{phonet_text}</span>
      <i
        className="fa-solid fa-volume-low phonetics__audioIcon"
        onClick={PlaySound}
      ></i>
    </div>
  );
}
