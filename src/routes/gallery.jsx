import React from "react";
import "./gallery.css";
import { useEffect, useState } from "react";
import axios from "axios";
import GalleryThumbnail from "../Components/GalleryThumbnail";
import { NavLink } from "react-router-dom";

function Gallery() {
  const [galleryComponents, setGalleryComponents] = useState([]);
  let get_response = "";

  useEffect(() => {
    retrieveGalleryThumbnails();
  }, []);

  async function retrieveGalleryThumbnails() {
    let thumbnailPics = [];
    const thumbnailURL =
      "http://localhost:5000/database/fetch-gallery-thumbnails";

    try {
      const test_response = await axios.get(thumbnailURL);
      get_response = test_response.data;
      thumbnailPics = get_response.map((image_dict) => {
        return (
          <NavLink to={"/gallery"} key={image_dict["name"]}>
            <GalleryThumbnail
              name={image_dict["name"]}
              image={image_dict["url"]}
            />
          </NavLink>
        );
      });

      setGalleryComponents(thumbnailPics);
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <h2>There was an error loading the search results.</h2>
      );
      setGalleryComponents(errorMessage);
    }
  }

  return (
    <div>
      <h2>Gallery</h2>
      <div id="gallery-grid">{galleryComponents}</div>
    </div>
  );
}

export default Gallery;
