import "./App.css";
import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <div className="App container col-m-8">
      <header className="App-header m-4">DICTIONARY</header>
      <div className="card-body m-4">
        <h5 className="card-title mt-4">Look up a word, learn it forever!</h5>
        <p className="card-text mt-4 pt-4">What word do you want to look up?</p>
        <Search />
      </div>
    </div>
  );
}
