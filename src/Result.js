import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.results !== null) {
    return (
      <div className="meaningshow row p-2 m-4">
        <div className="bg-light rounded col-lg-8 me-2 p-2">
          <h1>{props.results.word}</h1>
          <h3>{props.results.phonetic}</h3>
          {props.results.meanings.map(function(element) {
            return (
              <Meaning
                partOfSpeech={element.partOfSpeech}
                definitions={element.definitions}
                synonyms={element.synonyms}
              />
            );
          })}
        </div>
        <div className="bg-light rounded col p-4">
          <h6>Images</h6>
        </div>
      </div>
    );
  }
}
