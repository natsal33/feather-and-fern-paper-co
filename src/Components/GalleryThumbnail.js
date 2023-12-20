import React from "react";

function GalleryThumbnail(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img
        src={require("../pics/gallery-page-photos/" + props.thumbnail)}
      ></img>
    </div>
  );
}

export default GalleryThumbnail;
