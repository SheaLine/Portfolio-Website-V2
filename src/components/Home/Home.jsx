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

  const handleClick = (path) => {
    handleFadeOut(() => {
      if (sceneRef.current) {
        sceneRef.current.stopMedia(); // Stop the video and audio
      }
      navigate(path); // Navigate to the specified route
    });
  };

  return (
    <Scene VideoSrc={`./Blender-Camp-Scene.mp4`} AudioSrc={`./CampAudio.mp3`}>
      <div className="title">
        Shea Line
        <div className="heading">A Developer's Campfire Story</div>
      </div>

      <div className="contact-btn">
        <ContactBtn text={"Contact Me"} />
      </div>

      <div className="about-me-box">
        <HoverBox Text={"About Me"} onClick={() => handleClick("/about-me")} />
      </div>
      <div className="projects-box">
        <HoverBox Text={"Projects"} onClick={() => handleClick("/projects")} />
      </div>
      <div className="experience-box">
        <HoverBox
          Text={"Experience"}
          onClick={() => handleClick("/experience")}
        />
      </div>
      <div className="courses-box">
        <HoverBox Text={"Courses"} onClick={() => handleClick("/courses")} />
      </div>
    </Scene>
  );
}

export default withFadeEffect(Home, "fade-exit-active");
