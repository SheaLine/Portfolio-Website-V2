import React, { useState, useRef, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImgCarousel.css";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);
  const videoRefs = useRef([]);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === slide) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [slide]);

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          >
            {item.src.endsWith(".mp4") ? (
              <video
                src={process.env.NODE_ENV === "development" ? item.src : "/Portfolio-Website-V2" + item.src}
                alt={item.alt}
                ref={(el) => (videoRefs.current[idx] = el)}
                controls
                className="slide-content"
                autoPlay={false}
                loop
                muted
              />
            ) : (
              <img
                src={process.env.NODE_ENV === "development" ? item.src : "/Portfolio-Website-V2" + item.src}
                alt={item.alt}
                key={idx}
                className="slide-content"
              />
            )}
          </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carousel;
