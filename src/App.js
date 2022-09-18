import "./App.css";
import React, { useState } from "react";
import Search from "./Search";
import Result from "./Result";

export default function App() {
  const [results, setResults] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [images, setImages] = useState([]);

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
          <Search
            setResults={setResults}
            setImages={setImages}
            setLoaded={setLoaded}
          />
          <div className="sub-header">English-English</div>
        </div>
      </div>
      <Result results={results} images={images} loaded={loaded} />
    </div>
  );
}
