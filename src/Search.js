import React, { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  function handleSearch(event) {
    event.preventDefault();
    console.log("Searching");
  }
  function updateSearchingWord(event) {
    setKeyword(event.target.value);
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
