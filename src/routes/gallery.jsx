import React from "react";
import "./gallery.css";
import axios from "axios";
import GalleryThumbnail from "../Components/GalleryThumbnail";
import { useLoaderData } from "react-router-dom";

export function loader() {
  const thumbnailURL =
    "http://localhost:5000/database/fetch-gallery-thumbnails";
  const get_response = axios.get(thumbnailURL).then(function (response) {
    const thumbnailObjects = response.data.map((image_dict) => {
      const thumbnail_album_name = image_dict["name"];
      return (
        <GalleryThumbnail
          name={thumbnail_album_name}
          image={image_dict["url"]}
        />
      );
    });
    return thumbnailObjects;
  });
  return get_response;
}

function Gallery() {
  const thumbnailPhotos = useLoaderData();

  return (
    <div>
      <h2>Gallery</h2>
      <div className="gallery-grid">{thumbnailPhotos}</div>
    </div>
  );
}

export default Gallery;
