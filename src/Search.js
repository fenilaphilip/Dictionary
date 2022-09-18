import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [keyword, setKeyword] = useState("");

  function updateSearchingWord(event) {
    setKeyword(event.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();
    console.log(`searching ${keyword}`);
    let dicitionary_api_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dicitionary_api_url).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    props.setResults({
      word: response.data[0].word,
      phonetic: response.data[0].phonetic,
      phonetics: response.data[0].phonetics,
      meanings: response.data[0].meanings,
    });
  }

  return (
    <div className="col-m-6">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter a word"
          autoFocus={true}
          onChange={updateSearchingWord}
        />
      </form>
    </div>
  );
}
