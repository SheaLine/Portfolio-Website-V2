import React from "react";
import Scene from "./components/CampfireScene";
import "./App.css";

import HoverBox from "./components/HoverBox";

export default function App() {
  return (
    <Scene VideoSrc={`./Blender-Camp-Scene.mp4`} AudioSrc={`./CampAudio.mp3`}>
      <div className="title">Shea Line</div>
      <div className="heading">A Campfire Story</div>
      <div className="about-me-box">
        <HoverBox Text={"About Me"} />
      </div>
      <div className="projects-box">
        <HoverBox Text={"Projects"} />
      </div>
      <div className="experience-box">
        <HoverBox Text={"Experience"} />
      </div>
      <div className="courses-box">
        <HoverBox Text={"Courses"} />
      </div>
    </Scene>
  );
}
