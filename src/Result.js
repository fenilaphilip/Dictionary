import React from "react";

export default function Result(props) {
  if (props.results !== null) {
    return (
      <div className="card-body m-4">
        <div className="display">{props.results.word}</div>
        <div className="display">{props.results.phonetic}</div>
        <div className="display">
          {/* <ul>
            {props.results.meanings.map(function(element, index) {
              return <li key={index}>{element.definition}</li>;
            })}
          </ul> */}
        </div>
      </div>
    );
  }
}
