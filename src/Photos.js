import React from "react";

export default function Photos(props) {
  let gallery = props.photos;
  console.log(gallery);
  return (
    <div>
      <h6>Images</h6>
      {gallery.map(function(element) {
        return (
          <img src={element.src.small} alt={element.alt} className="m-2 p-2" />
        );
      })}
    </div>
  );
}
