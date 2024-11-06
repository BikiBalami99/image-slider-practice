import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function decreaseCurrentImgIndex() {
    if (currentImgIndex === 0) {
      setCurrentImgIndex(images.length - 1);
    } else {
      setCurrentImgIndex((prev) => prev - 1);
    }
  }

  function increaseCurrentImgIndex() {
    if (currentImgIndex === images.length - 1) {
      setCurrentImgIndex(0);
    } else {
      setCurrentImgIndex((prev) => prev + 1);
    }
  }

  return (
    <div>
      <section className="carouselWrapper">
        <div
          className="allImages"
          style={{ transform: `translateX(${currentImgIndex * -100}% )` }}
        >
          {images.map((image) => {
            return (
              <img
                key={image.title}
                src={image.image}
                className="image"
                aria-label={`Image of ${image.title}`}
              />
            );
          })}
        </div>
        <button onClick={decreaseCurrentImgIndex} className="left-arrow">
          &larr;
        </button>
        <button onClick={increaseCurrentImgIndex} className="right-arrow">
          &rarr;
        </button>
      </section>
    </div>
  );
};

export default Carousel;
