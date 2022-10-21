import React from "react";
import play from "./play.png";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio}>
        <img src={play} alt="play" />
      </a>
      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
