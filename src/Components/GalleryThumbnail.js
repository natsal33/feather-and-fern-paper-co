import React from "react";
import "./GalleryThumbnail.css";
import { Link } from "react-router-dom";

function GalleryThumbnail(props) {
  const thumbnailStyle = {
    backgroundImage: "url(" + props.image + ")",
  };

  return (
    <Link to={`/gallery/${props.name}`} key={props.name}>
      <div className="galleryThumbnailComponent" style={thumbnailStyle}>
        <h3 className="galleryThumbnailText">
          {decodeURIComponent(props.albumName).replace(/-/g, " ")}
        </h3>
      </div>
    </Link>
  );
}

export default GalleryThumbnail;
