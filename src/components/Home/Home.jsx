import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Scene from "../CampfireScene";
import HoverBox from "../HoverBox";
import "./Home.css";

function Home() {
  const sceneRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (path) => {
    console.log(sceneRef.current);
    if (sceneRef.current) {
      sceneRef.current.stopMedia(); // Stop the video and audio
    }
    navigate(path); // Navigate to the specified route
  };

  return (
    <Scene VideoSrc={`./Blender-Camp-Scene.mp4`} AudioSrc={`./CampAudio.mp3`}>
      <div className="title">Shea Line</div>
      <div className="heading">A Campfire Story</div>
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

export default Home;
