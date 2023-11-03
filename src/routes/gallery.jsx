import React from "react";
import "./gallery.css";
import { Form, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  const [galleryPics, setGalleryPics] = useState([]);
  // const formData = useActionData();

  useEffect(() => {
    retrieveGalleryPhotos();
  }, []);

  async function retrieveGalleryPhotos() {
    // if (!formData || !formData.get("clientInput")) {
    //   setResults(<h2>Search for something :)</h2>);
    //   return;
    // }

    // const searchType = formData.get("searchBy");
    // const searchParam = formData.get("clientInput");
    const galleryName = "demo-pics";
    const searchURL = `/database/download-gallery-cover-photo?gallery-name=${galleryName}`;
    console.log("Search URL: " + searchURL);

    try {
      const response = await axios.get(searchURL);
      console.log("Response: " + response);
      const retrievedGalleryPhotos = response.data.map((photo) => (
        <h4>photo</h4>
      ));
      if (retrieveGalleryPhotos.length > 0) {
        setGalleryPics(retrievedGalleryPhotos);
      } else {
        const noResults = <h2>There are no gallery photos to display.</h2>;
        setGalleryPics(noResults);
      }
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
      <div id="gallery-grid">{galleryPics}</div>
    </div>
  );
}

export default Gallery;
