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
          
At Feather & Fern Paper Co., modernity meets minimalism in every creation. Specializing in sleek, contemporary designs, they capture the essence of life's most significant moments with clean lines and refined elegance. From custom wedding invitations to personalized stationery, each piece is crafted with precision and a keen eye for detail. Explore their offerings and discover how they can bring your vision to life with modern, timeless artistry.
        </p>
        <HomepageHighlights />
      </div>
    </FadeInSection>
  );
}

export default Home;
