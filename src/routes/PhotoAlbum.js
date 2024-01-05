import React, { useState } from "react";
import "./PhotoAlbum.css";
import GalleryPhoto from "../Components/GalleryPhoto";
import EnlargedImage from "./EnlargedImage";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

export function loader({ request }) {
  const albumName = request.url.split("/")[4];
  const photoURL = `/database/fetch-gallery?album-name=${albumName}`;
  const get_response = axios.get(photoURL).then(function (response) {
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

  return get_response;
}

function PhotoAlbum() {
  const [enlargedImageURL, setEnlargedImageURL] = useState("");
  const albumPhotos = useLoaderData();

  return (
    <div>
      <h3>
        &#8592;<Link to={"/gallery"}>Back to Galleries</Link>
      </h3>
      {enlargedImageURL === "" ? <div /> : <EnlargedImage />}
      <div className="photo-grid">{albumPhotos}</div>
    </div>
  );
}

export default PhotoAlbum;
