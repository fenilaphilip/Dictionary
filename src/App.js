import "./App.css";
import React, { useState } from "react";
import Search from "./Search";
import Result from "./Result";

export default function App() {
  const [results, setResults] = useState({
    word: "climate",
    phonetic: "/ˈklaɪmɪt/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "An area of the earth's surface between two parallels of latitude.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition: "A region of the Earth.",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "The long-term manifestations of weather and other atmospheric conditions in a given area or country, now usually represented by the statistical summary of its weather conditions during a period long enough to ensure that representative values are obtained (generally 30 years).",
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              "The context in general of a particular political, moral etc. situation.",
            synonyms: [],
            antonyms: [],
            example:
              "Industries that require a lot of fossil fuels are unlikely to be popular in the current political climate.",
          },
        ],
        synonyms: [],
        antonyms: [],
      },
      {
        partOfSpeech: "verb",
        definitions: [{ definition: "To dwell.", synonyms: [], antonyms: [] }],
        synonyms: [],
        antonyms: [],
      },
    ],
  });

  return (
    <div className="App container col-m-8">
      <header className="App-header m-4">DICTIONARY</header>
      <div className="card-body m-4">
        <h5 className="card-title mt-4">Look up a word, learn it forever!</h5>
        <p className="card-text mt-4 pt-4">What word do you want to look up?</p>
        <Search setResults={setResults} />
      </div>
      <Result results={results} />
    </div>
  );
}
