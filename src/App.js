import React, { useState } from "react";
import "./styles.css";

var musicGenre = {
  pop: ["The Kid LAROI, Justin Bieber - STAY ", "|| Bella Poarch - Inferno"],
  rock: [
    "Panic! At the disco - Northern Downpour ",
    "|| Twenty One Pilots - Shy Away"
  ],
  indie: ["Damine Rice - Blower's Daughter ", "|| Phum Viphurit - Pluto"]
};

var songsRecommended = Object.keys(musicGenre);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function genreChangeHandler(song) {
    var meaning = musicGenre[song];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h3> Song recommendation </h3>
      {songsRecommended.map(function (song) {
        return (
          <button
            onClick={() => genreChangeHandler(song)}
            style={{
              fontSize: "1rem",
              padding: "0.5rem 1rem",
              margin: "1rem",
              cursor: "pointer"
            }}
            key={song}
          >
            {song}
          </button>
        );
      })}
      <div> {meaning} </div>
    </div>
  );
}
