import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./CampfireScene.css";

const Scene = forwardRef(({ VideoSrc, AudioSrc, children }, ref) => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    const handleVideoEnd = () => {
      if (video) {
        video.currentTime = 1;
        video.play();
      }
    };

    const handleUserInteraction = () => {
      if (audio) {
        audio.play();
      }
    };

    if (video && audio) {
      video.play();
      video.addEventListener("ended", handleVideoEnd);
      document.addEventListener("click", handleUserInteraction);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  // This allows the parent component to call stopMedia
  useImperativeHandle(ref, () => ({
    stopMedia() {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    },
  }));

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
});

export default Scene;
