import "./App.css";
import React, { useState } from "react";
import Search from "./Search";
import Result from "./Result";

export default function App() {
  const [results, setResults] = useState({
    word: "sunset",
    phonetic: "/ˈsʌnˌsɛt/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "The time of day when the sun disappears below the western horizon.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "The changes in color of the sky at sunset.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "The final period of the life of a person or thing.",
            synonyms: [],
            antonyms: [],
            example: "one's sunset years",
          },
          {
            definition: "Having a set termination date.",
            synonyms: [],
            antonyms: [],
            example:
              "The tax increase legislation included a sunset clause requiring renewal to prevent the tax increase from expiring.",
          },
          {
            definition: "The region where the sun sets; the west.",
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: [
          "last",
          "terminal",
          "twilight",
          "end",
          "final act",
          "swansong",
          "dusk",
          "nightfall",
          "sundown",
          "twilight",
        ],
        antonyms: ["sunrise"],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "To phase out.",
            synonyms: [],
            antonyms: [],
            example:
              "We'll be sunsetting version 1.9 of the software shortly after releasing version 2.0 next quarter.",
          },
        ],
        synonyms: [],
        antonyms: [],
      },
    ],
  });

  return (
    <div className="App container col-m-8">
      <header className="App-header m-4">
        <img
          src={require("./magnifying-glass-book.png")}
          alt="logo"
          className="icon"
        />
        DICTIONARY{" "}
      </header>

      <div className="row m-2">
        <div className="col-3">
          <img
            src={require("./childrens-books-clip-art.png")}
            alt="logo"
            className="logo"
          />
        </div>
        <div className="col m-2">
          <h5 className="card-title mt-4">Look up a word, learn it forever!</h5>
          <p className="card-text mt-4 pt-4">
            What word do you want to look up?
          </p>
          <Search setResults={setResults} />
          <div className="sub-header">English-English</div>
        </div>
      </div>

      <Result results={results} />
    </div>
  );
}
