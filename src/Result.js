import React from "react";
import Meaning from "./Meaning";
import ReactAudioPlayer from "react-audio-player";
import Photos from "./Photos";

export default function Result(props) {
  if (props.results !== null) {
    return (
      <div className="meaningshow row p-2 m-4">
        <div className="bg-light rounded col-lg-8 me-2 p-2">
          <h1>{props.results.word}</h1>
          <h3>{props.results.phonetics[0].text}</h3>
          <ReactAudioPlayer src={props.results.phonetics[0].audio} controls />
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
          <Photos photos={props.images} />
        </div>
      </div>
    );
  }
}
