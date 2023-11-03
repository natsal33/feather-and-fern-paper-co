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
            More about your product. What do you like to do? What kind of
            clients are you normally workign with? What inspires you? This is a
            great space to paint a picture of what it's like working with you
            and interacting with your products. We'll include photos in this
            section to highlight some of your favorite work and draw clients
            eyes in.
          </p>
          <div className="highlightPic right" id="highlightRightPic" />
        </div>
      ) : (
        <div className="highlightItem right">
          <div className="highlightPic right" id="highlightRightPic" />
          <p className="highlightNote right">
            More about your product. What do you like to do? What kind of
            clients are you normally workign with? What inspires you? This is a
            great space to paint a picture of what it's like working with you
            and interacting with your products. We'll include photos in this
            section to highlight some of your favorite work and draw clients
            eyes in.
          </p>
        </div>
      )}
    </div>
  );
}

export default HighlightRight;
