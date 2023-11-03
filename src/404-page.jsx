import React from "react";
import "./404-page.css";

function Error_404() {
  return (
    <div id="error-page">
      <h1>404 - Oops!</h1>
      <p>This page does not exist.</p>
      <p>
        <a href="/">Click here</a> to return to the Feather & Fern homepage.
      </p>
    </div>
  );
}

export default Error_404;
