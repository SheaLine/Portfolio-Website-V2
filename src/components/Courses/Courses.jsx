import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Scene from "../CampfireScene";
import withFadeEffect from "../Fade";
import { IoArrowBackCircle } from "react-icons/io5";
import BackButton from "../BackButton/BackButton";

import "./Courses.css";

function Courses({ handleFadeOut }) {
  return (
    <Scene VideoSrc={`./Blender-Camp-Scene.mp4`}>
      <BackButton handleFadeOut={handleFadeOut} />
      <div className="about-me">
        <h1>Hello There!</h1>
      </div>
    </Scene>
  );
}
export default withFadeEffect(Courses);
