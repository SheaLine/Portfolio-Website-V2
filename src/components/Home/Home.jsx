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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial state based on screen size

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Update state on resize
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize); // Add event listener for resize
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  const handleClick = (path) => {
    handleFadeOut(() => {
      if (sceneRef.current) {
        sceneRef.current.stopMedia();
      }
      navigate(path);
    });
  };

  return (
    <>
      {isMobile ? (
        // <img
        //   src="./Blender-Camp-Scene.jpg" // Replace with the path to your static image
        //   alt="Campfire Scene"
        //   className="mobile-scene"
        // >
        <div className="mobile-scene">
          <div className="title">
            Shea Line
            <div className="heading">A Developer&apos;s Campfire Story</div>
          </div>

          <div className="contact-btn">
            <ContactBtn text={"Contact Me"} />
          </div>

          <div className="navigation-boxes">
            <HoverBox
              Text={"About Me"}
              onClick={() => handleClick("/about-me")}
            />
            <HoverBox
              Text={"Projects"}
              onClick={() => handleClick("/projects")}
            />
            <HoverBox
              Text={"Experience"}
              onClick={() => handleClick("/experience")}
            />
            <HoverBox
              Text={"Courses"}
              onClick={() => handleClick("/courses")}
            />
          </div>
        </div>
      ) : (
        <Scene
          VideoSrc={`./Blender-Camp-Scene.mp4`}
          AudioSrc={`./CampAudio.mp3`}
        >
          <div className="title">
            Shea Line
            <div className="heading">A Developer&apos;s Campfire Story</div>
          </div>

          <div className="contact-btn">
            <ContactBtn text={"Contact Me"} />
          </div>

          <div className="navigation-boxes">
            <HoverBox
              Text={"About Me"}
              onClick={() => handleClick("/about-me")}
            />
            <HoverBox
              Text={"Projects"}
              onClick={() => handleClick("/projects")}
            />
            <HoverBox
              Text={"Experience"}
              onClick={() => handleClick("/experience")}
            />
            <HoverBox
              Text={"Courses"}
              onClick={() => handleClick("/courses")}
            />
          </div>
        </Scene>
      )}
    </>
  );
}

export default withFadeEffect(Home, "fade-exit-active");
