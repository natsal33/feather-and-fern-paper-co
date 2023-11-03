import React from "react";
import "./FadeInSection.css";

const FadeInSection = ({ children }) => {
  const domRef = React.useRef();

  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={domRef} className={isVisible ? " is-visible" : ""}>
      {children}
    </section>
  );
};

export default FadeInSection;
