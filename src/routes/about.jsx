import React from "react";
import "./about.css";

function About() {
  return (
    <div id="about-section">
      <div id="artist-portrait" />
      <div id="about-commentary">
        <h2>About Me</h2>
        <p>
          {" "}
          As a young girl, I would create handmade cards whenever my family
          would have a birthday. It started as one flower and then it was a
          field of flowers and then I started to incorporate cursive. Once I was
          in University, I created my own planners, making sure every line was
          straight with my ruler. I ultimately combined my love for handwriting
          and design when I got engaged, creating my own wedding stationery and
          day-of paper goods.
        </p>

        <p>
          {" "}
          Creating personalized and beautifully handcrafted wedding stationery
          allows me to be a part of one of the most important moments in
          people’s lives. I am drawn to the creative process, intertwining
          pieces of each couple to the work. My hope is to not only create
          beautiful paper goods, but that they tell a story of the couple they
          are celebrating. I am grateful for the opportunity to share my passion
          with you.
        </p>
      </div>
    </div>
  );
}

export default About;
