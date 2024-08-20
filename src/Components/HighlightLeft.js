import React from "react";

function HighlightLeft() {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth >= 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 650);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      <div className="highlightItem">
        <div className="highlightPic left" id="highlightLeftPic" />
        <p className="highlightNote left">
        Feather & Fern Paper Co. works with clients who appreciate the beauty in the little things, value fine craftsmanship, and seek stationery that mirrors their personality and story. The creative process is a collaborative journey, where time is taken to understand what makes each love story or special occasion unique. This understanding is then woven into the design, resulting in a product that is not just paper, but a tangible expression of what matters most.

        </p>
      </div>
    </div>
  );
}

export default HighlightLeft;
