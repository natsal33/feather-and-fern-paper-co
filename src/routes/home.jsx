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
          

        At Feather & Fern Paper Co., modernity and minimalism define every creation. Specializing in contemporary designs, they capture life's significant moments with clean lines and refined elegance. From wedding invitations to personalized stationery, each piece is crafted with precision and attention to detail, bringing your vision to life with timeless artistry.        </p>
        <HomepageHighlights />
      </div>
    </FadeInSection>
  );
}

export default Home;
