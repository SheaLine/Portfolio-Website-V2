// Home.jsx
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Scene from "../CampfireScene";
import HoverBox from "../HoverBox";
import withFadeEffect from "../Fade";
import ContactBtn from "../ContactButton/ContactButton";
import "./Home.css";

function Home({ handleFadeOut }) {
  const sceneRef = useRef(null);
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [focusX, setFocusX] = useState("80%");

  useEffect(() => {
    // calculate piecewise-linear focusX based on viewport width
    function calcFocusX(w) {
      if (w <= 425) {
        // 320 → 425 px maps 87% → 92%
        const m1 = (92 - 87) / (425 - 320);
        const b1 = 87 - m1 * 320;
        return `${(m1 * w + b1).toFixed(2)}%`;
      } else if (w <= 768) {
        // 425 → 768 px maps 92% → 73%
        const m2 = (73 - 92) / (768 - 425);
        const b2 = 92 - m2 * 425;
        return `${(m2 * w + b2).toFixed(2)}%`;
      }
      // above 768px clamp at 73%
      return "80%";
    }

    function onResize() {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setFocusX(calcFocusX(w));
    }

    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleClick = (path) => {
    handleFadeOut(() => {
      sceneRef.current?.stopMedia();
      navigate(path);
    });
  };

  return (
    <>
      {isMobile ? (
        <>
          <div className="warning">
            {" "}
            For Full Experience Use a Laptop or Desktop{" "}
          </div>
          <div
            className="mobile-scene"
            style={{ "--focus-x": focusX, "--focus-y": "25%" }}
          >
            <div className="title">
              Shea Line
              <div className="heading">A Developer&apos;s Campfire Story</div>
            </div>

            <div className="navigation-boxes">
              <HoverBox
                Text="About Me"
                onClick={() => handleClick("/about-me")}
              />
              <HoverBox
                Text="Projects"
                onClick={() => handleClick("/projects")}
              />
              <HoverBox
                Text="Experience"
                onClick={() => handleClick("/experience")}
              />
              <HoverBox
                Text="Courses"
                onClick={() => handleClick("/courses")}
              />
            </div>

            <div className="contact-btn">
              <ContactBtn text="Contact Me" />
            </div>
          </div>
        </>
      ) : (
        <Scene
          ref={sceneRef}
          VideoSrc="./Blender-Camp-Scene.mp4"
          AudioSrc="./CampAudio.mp3"
        >
          <div className="title">
            Shea Line
            <div className="heading">A Developer&apos;s Campfire Story</div>
          </div>

          <div className="navigation-boxes">
            <HoverBox
              Text="About Me"
              onClick={() => handleClick("/about-me")}
            />
            <HoverBox
              Text="Projects"
              onClick={() => handleClick("/projects")}
            />
            <HoverBox
              Text="Experience"
              onClick={() => handleClick("/experience")}
            />
            <HoverBox Text="Courses" onClick={() => handleClick("/courses")} />
          </div>

          <div className="contact-btn">
            <ContactBtn text="Contact Me" />
          </div>
        </Scene>
      )}
    </>
  );
}

export default withFadeEffect(Home, "fade-exit-active");
