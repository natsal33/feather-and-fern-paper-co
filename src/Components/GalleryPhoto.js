import React from "react";
import "./GalleryPhoto.css";

function GalleryPhoto(props) {
  const photoDisplayStyle = {
    backgroundImage: "url(" + props.image + ")",
    backgroundSize: "50vh",
  };

  return (
    // <div className="galleryPhotoComponent" style={photoDisplayStyle}></div>
    <img src={props.image}></img>
  );
}

export default GalleryPhoto;
