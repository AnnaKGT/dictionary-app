import React from "react";

//https://www.npmjs.com/package/howler
import { Howl } from "howler";
import "./Phonetics.css";

export default function Phonetics(props) {
  const sound = new Howl({
    autoSuspend: true,
    html5: true,
    html5PoolSize: 10,
    loop: false,
    preload: true,
    src: [props.phoneticAudio],
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
      <span className="phonetics__text">{props.phoneticText}</span>
      <i
        className="fa-solid fa-volume-low phonetics__audioIcon"
        onClick={PlaySound}
      ></i>
    </div>
  );
}
