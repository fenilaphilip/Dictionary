import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  let partOfSpeech = props.partOfSpeech;
  let definitions = props.definitions;
  let synonyms = props.synonyms;

  return (
    <div>
      <ol className="p-0 rounded">
        <li className="list-group-item list-group-item-danger p-2">
          {partOfSpeech}
        </li>
        {definitions.map(function(element, index) {
          return (
            <li
              key={index}
              className="list-group-item list-group-item-info p-2"
            >
              {index + 1}. {element.definition}
              <div>
                <i>&nbsp; {element.example}</i>
              </div>
            </li>
          );
        })}
      </ol>
      <Synonyms synonyms={synonyms} />
    </div>
  );
}
