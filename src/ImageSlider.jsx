import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./imageSlider.css";

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((prev) => {
      if (prev === 0) {
        return imageUrls.length - 1;
      } else {
        return prev - 1;
      }
    });
  }

  function showNextImage() {
    setImageIndex((prev) => {
      if (prev === imageUrls.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {imageUrls.map((url) => {
          return (
            <img
              key={url}
              src={url}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          );
        })}
      </div>

      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {imageUrls.map((_, index) => {
          return (
            <button
              key={index}
              className="img-slider-dot-btn"
              onClick={() => {
                setImageIndex(index);
              }}
              aria-label={`View Image at ${index + 1}`}
            >
              {index === imageIndex ? <CircleDot /> : <Circle />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
