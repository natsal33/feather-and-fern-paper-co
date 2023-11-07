import React from "react";
import "./gallery.css";
import { Form, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  const [galleryPics, setGalleryPics] = useState([]);
  let get_response = "";

  useEffect(() => {
    retrieveGalleryPhotos();
  }, []);

  async function retrieveGalleryPhotos() {
    const galleryName = "demo-pics";
    const searchURL = `localhost:5000/database/download-gallery-cover-photo?gallery-name=${galleryName}`;
    const testURL = "http://localhost:5000/database";
    console.log("Search URL: " + searchURL);

    try {
      // const response = await axios.get(searchURL);
      const test_response = await axios.fetch(testURL);
      get_response = test_response.data;
      console.log("Response: " + get_response);
      // const retrievedGalleryPhotos = response.data.map((photo) => (
      //   <h4>photo</h4>
      // ));
      // if (retrieveGalleryPhotos.length > 0) {
      //   setGalleryPics(retrievedGalleryPhotos);
      // } else {
      //   const noResults = <h2>There are no gallery photos to display.</h2>;
      //   setGalleryPics(noResults);
      // }
      setGalleryPics(get_response);
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <h2>There was an error loading the search results.</h2>
      );
      setGalleryPics(errorMessage);
    }
  }

  return (
    <div>
      <h2>Gallery Page coming soon!</h2>
      <p>{get_response}</p>
      <div id="gallery-grid">{galleryPics}</div>
    </div>
  );
}

export default Gallery;
