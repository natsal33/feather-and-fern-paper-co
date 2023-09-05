import React from "react";
import "./Slideshow.css";
import slidePic1 from "../pics/scrolling-gallery-images/DEMO-PHOTO1.jpeg";
import slidePic2 from "../pics/scrolling-gallery-images/DEMO-PHOTO2.jpeg";
import slidePic3 from "../pics/scrolling-gallery-images/DEMO-PHOTO3.jpeg";

const slideShowImages = [slidePic1, slidePic2, slidePic3];
const delay = 4000;

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
            style={{ backgroundImage: `url(${backgroundIndex})` }}
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
