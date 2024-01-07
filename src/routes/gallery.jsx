import React from "react";
import "./gallery.css";
import axios from "axios";
import GalleryThumbnail from "../Components/GalleryThumbnail";
import { useLoaderData } from "react-router-dom";

export function loader() {
  const thumbnailURL = "/database/fetch-gallery-thumbnails";
  const get_response = axios.get(thumbnailURL).then(function (response) {
    if (get_response.status === 404) {
      throw new Response("Not Found", { status: 404 });
    }
    const thumbnailObjects = response.data.map((image_dict) => {
      const thumbnail_album_name = image_dict["name"].replace(/-/g, " ");
      return (
        <GalleryThumbnail
          name={image_dict["name"]}
          albumName={thumbnail_album_name}
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
