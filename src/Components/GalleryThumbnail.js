import React from "react";
import "./GalleryThumbnail.css";
import { Link } from "react-router-dom";

function GalleryThumbnail(props) {
  const thumbnailStyle = {
    backgroundImage: "url(" + props.image + ")",
    backgroundSize: "50vh",
  };

  return (
    <Link to={`/gallery/${props.name}`} key={props.name}>
      <div className="galleryThumbnailComponent" style={thumbnailStyle}>
        <h3>{props.name}</h3>
      </div>
    </Link>
  );
}

export default GalleryThumbnail;
