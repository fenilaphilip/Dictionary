import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [keyword, setKeyword] = useState("sunset");

  function showDictionary(keyword) {
    console.log(`searching ${keyword}`);
    let dicitionary_api_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dicitionary_api_url).then(handleResponse);

    const image_api_key = `563492ad6f91700001000001dd5012d75b81473291b465a83952731e`;
    let photos_api_url = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12&orientation=square`;
    axios
      .get(photos_api_url, {
        headers: { Authorization: `${image_api_key}` },
      })
      .then(handlePhotoResponse);
  }
  function updateSearchingWord(event) {
    setKeyword(event.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();
    showDictionary(keyword);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    props.setResults({
      word: response.data[0].word,
      phonetics: response.data[0].phonetics,
      meanings: response.data[0].meanings,
    });
  }
  function handlePhotoResponse(response) {
    let photos = response.data.photos;
    props.setImages(photos);
    props.setLoaded(true);
  }
  showDictionary(keyword);

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
