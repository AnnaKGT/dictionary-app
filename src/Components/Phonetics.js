import React from "react";

//https://www.npmjs.com/package/howler
import { Howl } from "howler";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props);
  let phonet_text = props.phonetics[0].text;
  let phonet_audio = props.phonetics[0].audio;

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
