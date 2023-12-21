import React from "react";
import "./GalleryThumbnail.css";

function GalleryThumbnail(props) {
  const thumbnailStyle = {
    backgroundImage: "url(" + props.image + ")",
    backgroundSize: "50vh",
  };

  return (
    <div className="galleryThumbnailComponent" style={thumbnailStyle}>
      <h3>{props.name}</h3>
    </div>
  );
}

export default GalleryThumbnail;
