import React, { useState } from "react";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./image-slider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <div className="slider">
      {/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} /> */}
      {/* <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}

      <button className="left-arrow" onClick={prevSlide}>Prev</button>
      <button className="right-arrow" onClick={nextSlide}>Next</button>

      
      {slides.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img src={slide.image} alt="img" className="image" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
