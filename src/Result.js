import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.results !== null) {
    return (
      <div className="row p-2 m-2">
        <div className="bg-light rounded col-lg-8 p-4">
          <h1>{props.results.word}</h1>
          <h3>{props.results.phonetic}</h3>
          {props.results.meanings.map(function(element, key) {
            return (
              <Meaning
                partOfSpeech={element.partOfSpeech}
                definitions={element.definitions}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
