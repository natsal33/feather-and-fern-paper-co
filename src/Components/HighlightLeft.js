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
        The goal is to create not just a product, but an experience—a moment of connection that leaves a lasting impression. Featured here are some of the favorite creations, each one a testament to the love, care, and creativity that define everything at Feather & Fern Paper Co.
        </p>
      </div>
    </div>
  );
}

export default HighlightLeft;
