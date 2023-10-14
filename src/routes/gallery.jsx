import React from "react";
import "./gallery.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  const url =
    "https://feather-and-fern-paper-co.s3.us-west-2.amazonaws.com/demo-pics/";
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    getData();
  }, [url]);

  async function getData() {
    setIsLoading(true);

    try {
      const response = await axios.get(url);
      console.log(response);
      //   response.forEach(function(number) {
      //     console.log(number);
      // });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h2>Gallery Page coming soon!</h2>
      <div id="gallery-grid"></div>
    </div>
  );
}

export default Gallery;
