// FullscreenVideo.jsx
import React, { useRef, useEffect } from "react";
import "./CampfireScene.css";

const Scene = ({ VideoSrc, AudioSrc, children }) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && audioRef.current) {
      videoRef.current.play();

      const handleVideoEnd = () => {
        // Set the video to start a few frames in (e.g., 0.5 seconds)
        videoRef.current.currentTime = 1;
        videoRef.current.play();
      };

      const handleUserInteraction = () => {
        audioRef.current.play(); // play audio when user clicks on page
      };

      videoRef.current.addEventListener("ended", handleVideoEnd);
      document.addEventListener("click", handleUserInteraction); //check fo click to play audio

      return () => {
        videoRef.current.removeEventListener("ended", handleVideoEnd);
        document.removeEventListener("click", handleUserInteraction);
      };
    }
  }, []);

  return (
    <div className="fullscreen-video-container">
      <video ref={videoRef} src={VideoSrc} className="fullscreen-video" muted>
        Your browser does not support the video tag.
      </video>
      <audio ref={audioRef} src={AudioSrc} loop>
        Your browser does not support the audio tag.
      </audio>
      {children}
    </div>
  );
};

export default Scene;
