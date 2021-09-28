import React, { useState } from "react";
import "./styles.css";

var catalog = {
  pop: [
    {
      name: "-->  The Kid LAROI, Justin Bieber - STAY ",
      rating: "4.1"
    },
    {
      name: "-->  Bella Poarch - Inferno",
      rating: "4.0"
    },
    {
      name: "-->  One Republic - Counting Stars",
      rating: "4.3"
    }
  ],
  rock: [
    {
      name: "-->  Panic! At the disco - Northern Downpour ",
      rating: "5.0"
    },
    {
      name: "-->  Twenty One Pilots - Shy Away",
      rating: "4.8"
    },
    {
      name: "-->  Green Day - Time Of Your Life",
      rating: "5.0"
    }
  ],
  indie: [
    {
      name: "-->  Damien Rice - Blower's Daughter ",
      rating: "4.7"
    },
    {
      name: "-->  Phum Viphurit - Pluto",
      rating: "4.3"
    },
    {
      name: "-->  Dodie - Human",
      rating: "4.3"
    }
  ]
};

var genres = Object.keys(catalog);

export default function App() {
  var [songs, setSongs] = useState([]);

  function genreChangeHandler(genre) {
    var songs = catalog[genre];
    setSongs(songs);
  }

  return (
    <div
      className="App"
      style={{
        textAlign: "left",
        width: "70%"
      }}
    >
      <h3
        style={{
          fontSize: "2rem",
          backgroundColor: "black",
          color: "white",
          padding: "1rem"
        }}
      >
        {" "}
        => Song recommendations{" "}
      </h3>
      <div>
        <p> here are some of the songs I really like </p>
        {genres.map(function (genre, index) {
          return (
            <button
              onClick={() => genreChangeHandler(genre)}
              style={{
                fontSize: "1rem",
                padding: "0.5rem 1rem",
                margin: "1rem",
                cursor: "pointer",
                borderRadius: "1rem"
              }}
              key={index}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div>
        {songs.map(function (song, index) {
          return (
            <div key={index}>
              <p style={{ color: "black" }}>{song.name}</p>
              <span style={{ color: "#EEBC1D" }}>
                {"⭐ " + song.rating + " / 5"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
