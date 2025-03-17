import React from "react";
import Meaning from "./Meaning";
import ReactAudioPlayer from "react-audio-player";
import Photos from "./Photos";

export default function Result(props) {
  if (props.loaded === true) {
    return (
      <div className="meaningshow row rounded p-1 m-0 mb-1 mt-1">
        <div className="overflow-scroll bg-light  col-lg-8  p-2">
          <h1>{props.results.word}</h1>
          <h3>{props.results.phonetics[0].text}</h3>
          <ReactAudioPlayer src={props.results.phonetics[0].audio} controls />
          {props.results.meanings.map(function (element) {
            return (
              <Meaning
                partOfSpeech={element.partOfSpeech}
                definitions={element.definitions}
                synonyms={element.synonyms}
              />
            );
          })}
        </div>
        <div className="overflow-scroll bg-light col pt-4 overflow-hidden">
          <Photos photos={props.images} />
        </div>
      </div>
    );
  }
}
