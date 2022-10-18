import React from "react";
import play from "./play.png";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio}>
        <img src={play} alt="play" />
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
