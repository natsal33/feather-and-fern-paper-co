import React from "react";
import "./home.css";
import "../pics/wire_frame.png";
import Slideshow from "../Components/Slideshow.js";
import HomepageHighlights from "../Components/HomepageHighlights";
import FadeInSection from "../Components/FadeInSection";

function Home() {
  return (
    <FadeInSection>
      <div id="homeContent">
        <Slideshow />
        <h2 id="welcome-statement">Welcome to Feather & Fern Paper Co.</h2>
        <p id="intro">
          Here is where you can put some content to draw the eyes of potential
          clients and talk al little bit about yourself. A little bit about your
          style, a bit about your work, and talk high level about your
          offerings. Something to draw readers in.
        </p>
        <HomepageHighlights />
      </div>
    </FadeInSection>
  );
}

export default Home;
