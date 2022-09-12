import React from "react";

export default function Meaning(props) {
  let partOfSpeech = props.partOfSpeech;
  let definitions = props.definitions;
  console.log(partOfSpeech);
  console.log(definitions);

  return (
    <ol className="p-0 rounded">
      <li className="list-group-item list-group-item-danger p-2">
        {partOfSpeech}
      </li>
      {definitions.map(function(element, index) {
        return (
          <li key={index} className="list-group-item list-group-item-info p-2">
            {index + 1}. {element.definition}
          </li>
        );
      })}
    </ol>
  );
}
