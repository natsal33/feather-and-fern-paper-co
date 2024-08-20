import React from "react";

function HighlightRight() {
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
      {isDesktop ? (
        <div className="highlightItem right">
          <p className="highlightNote right">
          Feather & Fern Paper Co. works with clients who appreciate the beauty in the little things, value fine craftsmanship, and seek stationery that mirrors their personality and story. The creative process is a collaborative journey, where time is taken to understand what makes each love story or special occasion unique. This understanding is then woven into the design, resulting in a product that is not just paper, but a tangible expression of what matters most.
          </p>
          <div className="highlightPic right" id="highlightRightPic" />
        </div>
      ) : (
        <div className="highlightItem right">
          <div className="highlightPic right" id="highlightRightPic" />
          <p className="highlightNote right">
          The goal is to create not just a product, but an experience—a moment of connection that leaves a lasting impression. Featured here are some of the favorite creations, each one a testament to the love, care, and creativity that define everything at Feather & Fern Paper Co.
          </p>
        </div>
      )}
    </div>
  );
}

export default HighlightRight;
