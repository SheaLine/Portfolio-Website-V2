import React from "react";
import Scene from "./components/CampfireScene";
import "./App.css";

export default function App() {
  return (
    <Scene
      VideoSrc={`/Portfolio-Website-V2/public/Blender-Camp-Scene.mp4`}
      AudioSrc={`/Portfolio-Website-V2/public/CampAudio.mp3`}
    >
      {/* Add interactive objects here */}
      <div className="interactive-object" style={{ top: "20%", left: "40%" }}>
        <button onClick={() => alert("Clicked!")}>Click Me</button>
      </div>
    </Scene>
  );
}
