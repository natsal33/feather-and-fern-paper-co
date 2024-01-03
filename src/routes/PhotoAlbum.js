import React from "react";
import GalleryPhoto from "../Components/GalleryPhoto";
import { useParams, useLoaderData } from "react-router-dom";
import axios from "axios";

export function loader({ request }) {
  const albumName = request.url.split("/")[4];
  const photoURL = `http://localhost:5000/database/fetch-gallery?album-name=${albumName}`;
  const get_response = axios.get(photoURL).then(function (response) {
    console.log(response.data);
    const photoObjects = response.data.map((image_dict) => {
      return (
        <GalleryPhoto
          name={image_dict["name"]}
          image={image_dict["url"]}
          key={image_dict["url"]}
        />
      );
    });
    return photoObjects;
  });
  console.log(get_response);

  return get_response;
}

function PhotoAlbum() {
  let { albumName } = useParams();
  console.log("Album Name: " + albumName);
  const albumPhotos = useLoaderData();

  return <div className="gallery-grid">{albumPhotos}</div>;
}

export default PhotoAlbum;
