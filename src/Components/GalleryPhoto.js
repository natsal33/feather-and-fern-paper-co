import React from "react";
import "./GalleryPhoto.css";

function GalleryPhoto(props) {
  return (
    <img className="galleryPhoto" src={props.image} alt={`props.name`}></img>
  );
}

export default GalleryPhoto;
