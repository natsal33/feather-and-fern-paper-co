import React from "react";
import "./HomepageHighlights.css";
import FadeInSection from "./FadeInSection";
import HighlightLeft from "./HighlightLeft";
import HighlightRight from "./HighlightRight";

function HomepageHighlights() {
  const highlightContent = [
    <HighlightLeft />,
    <HighlightRight />,
    <HighlightLeft />,
    <HighlightRight />,
  ];
  const displayItems = highlightContent.map((highlight) => (
    <FadeInSection key={Date.now() + Math.random()}>{highlight}</FadeInSection>
  ));

  return <div id="frontPageHighlightArea">{displayItems}</div>;
}

export default HomepageHighlights;
