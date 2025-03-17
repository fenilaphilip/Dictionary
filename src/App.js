import "./styles/App.css";
import React, { useState } from "react";
import Search from "./Search";
import Result from "./Result";

export default function App() {
  const [results, setResults] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [images, setImages] = useState([]);

  return (
    <div className="App container col-m-12">
      <header className="App-header">
        <img
          src={require("./images/magnifying-glass-book.png")}
          alt="logo"
          className="icon"
        />
        DICTIONARY
      </header>

      <div className="row">
        <div className="col-3 logodiv">
          <img
            src={require("./images/childrens-books-clip-art.png")}
            alt="logo"
            className="logo"
          />
        </div>
        <div className="col">
          <h5 className="card-title p-1">Look up a word, learn it forever!</h5>
          <p className="card-text p-1">
            What word do you want to look up?
          </p>
          <Search
            setResults={setResults}
            setImages={setImages}
            setLoaded={setLoaded}
          />
          <p className="text-white pt-1">Try something like cake, moon, watch, bulb, cat, apple... </p>
          <div className="sub-header">English-English</div>
        </div>
      </div>
      <Result results={results} images={images} loaded={loaded} />
    </div>
  );
}
