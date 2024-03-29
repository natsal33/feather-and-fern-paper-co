import React from "react";
import "../theme.css";
import "./Slideshow.css";
import slidePic4 from "../pics/scrolling-gallery-images/SCROLLING-PHOTO1.jpeg";
import slidePic5 from "../pics/scrolling-gallery-images/SCROLLING-PHOTO2.jpeg";
import slidePic2 from "../pics/scrolling-gallery-images/BOBC6607.jpg";
import slidePic1 from "../pics/scrolling-gallery-images/BOBC7302.jpg";
import slidePic3 from "../pics/scrolling-gallery-images/BOBC7307.jpg";

const slideShowImages = [slidePic1, slidePic2, slidePic3, slidePic4, slidePic5];
const delay = 10000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideShowImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slideShowImages.map((backgroundIndex, index) => (
          <div
            className="slide"
            key={index}
            style={{
              backgroundImage: `url(${backgroundIndex})`,
              backgroundSize: "cover",
            }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {slideShowImages.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
