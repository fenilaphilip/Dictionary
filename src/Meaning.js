import React from "react";

export default function Meaning(props) {
  let partOfSpeech = props.partOfSpeech;
  let definitions = props.definitions;
  console.log(partOfSpeech);
  console.log(definitions);

  return (
    <ul>
      <li className="list-group-item list-group-item-warning p-4">
        {partOfSpeech}
      </li>
      {definitions.map(function(element, index) {
        return (
          <li
            key={index}
            className="list-group-item list-group-item-success p-4"
          >
            {element.definition}
          </li>
        );
      })}
    </ul>
  );
}
