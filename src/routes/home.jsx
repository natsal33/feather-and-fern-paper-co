import React from "react";
import "./home.css";
import "../pics/wire_frame.png";
import Slideshow from "../Components/Slideshow.js";

function Home() {
  return (
    <div id="homeContent">
      <div>
        <Slideshow />
      </div>
      <div>
        <h2>Welcome to Feather & Fern Paper Co.</h2>
        <p>
          Here is where you can put some content to draw the eyes of potential
          clients and talk al little bit about yourself. A little bit about your
          style, a bit about your work, and talk high level about your
          offerings. Something to draw readers in.
        </p>
        <div className="frontPageHighlight">
          <div className="highlightPic" id="highlight1" />
          <p className="highlightNote">
            More about your product. What do you like to do? What kind of
            clients are you normally workign with? What inspires you? This is a
            great space to paint a picture of what it's like working with you
            and interacting with your products. We'll include photos in this
            section to highlight some of your favorite work and draw clients
            eyes in.
          </p>
        </div>
        <div className="frontPageHighlight">
          <p className="highlightNote">
            More about your product. What do you like to do? What kind of
            clients are you normally workign with? What inspires you? This is a
            great space to paint a picture of what it's like working with you
            and interacting with your products. We'll include photos in this
            section to highlight some of your favorite work and draw clients
            eyes in.
          </p>
          <div className="highlightPic" id="highlight2" />
        </div>
      </div>
    </div>
  );
}

export default Home;
