import React from "react";
import "./GalleryPhoto.css";

function GalleryPhoto(props) {
  return (
    <img
      className="galleryPhoto"
      src={props.image}
      alt={`props.name`}
      onClick={() => window.open(props.image)}
      role="button"
    ></img>
  );
}

export default GalleryPhoto;
