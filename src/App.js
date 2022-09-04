import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">DICTIONARY</header>
      <div className="card-body">
        <h5 className="card-title">Look up a word, learn it forever</h5>
        <p className="card-text">What word do you want to look up?</p>
        <input type="text" class="form-control" placeholder="Enter a word" />
      </div>
    </div>
  );
}
