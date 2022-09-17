import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length >= 1) {
    return (
      <ul className="p-0 rounded">
        <li className="list-group-item list-group-item-danger p-2">Synonyms</li>
        <li className="list-group-item list-group-item-info p-2">
          {props.synonyms.join(", ")}
        </li>
      </ul>
    );
  }
}
