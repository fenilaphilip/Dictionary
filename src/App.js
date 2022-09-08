import "./App.css";
import React, { useState } from "react";
import Search from "./Search";
import Result from "./Result";

export default function App() {
  const [results, setResults] = useState(null);

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
