import React, { useState } from "react";
import withFadeEffect from "./Fade";
import Scene from "./CampfireScene";
import { IoExpand, IoContract } from "react-icons/io5";
import BackButton from "./BackButton/BackButton";

function PageLayout({ className, title, handleFadeOut, children }) {
  // const [isExpanded, setIsExpanded] = useState(false);

  // const toggleExpand = () => {
  //   setIsExpanded(!isExpanded);
  // };
  return (
    <Scene VideoSrc="./Blender-Camp-Scene.mp4">
      <BackButton handleFadeOut={handleFadeOut} />
      <div className={className}>
        <h1>{title}</h1>
        {/* <button className="expand-btn" onClick={toggleExpand}>
          {isExpanded ? <IoContract /> : <IoExpand />}
        </button> */}
        {children}
      </div>
    </Scene>
  );
}

export default withFadeEffect(PageLayout);
