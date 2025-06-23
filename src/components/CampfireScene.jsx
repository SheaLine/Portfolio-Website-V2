// import React, {
//   useRef,
//   useEffect,
//   forwardRef,
//   useImperativeHandle,
// } from "react";
// import { BiSolidVolumeMute, BiSolidVolumeFull } from "react-icons/bi";
// import "./CampfireScene.css";

// const Scene = forwardRef(function Scene({ VideoSrc, AudioSrc, children }, ref) {
//   const videoRef = useRef(null);
//   const audioRef = useRef(null);
//   const [isMuted, setIsMuted] = React.useState(true);

//   useEffect(() => {
//     const video = videoRef.current;
//     const audio = audioRef.current;

//     const handleVideoEnd = () => {
//       if (video) {
//         video.currentTime = 1;
//         video.play();
//       }
//     };

//     const handleUserInteraction = () => {
//       if (audio) {
//         audio.play();
//       }
//     };

//     if (video && audio) {
//       video.play();
//       video.addEventListener("ended", handleVideoEnd);
//       document.addEventListener("click", handleUserInteraction);
//     }
//     return () => {
//       if (video) {
//         video.removeEventListener("ended", handleVideoEnd);
//       }
//       document.removeEventListener("click", handleUserInteraction);
//     };
//   }, []);

//   // This allows the parent component to call stopMedia
//   useImperativeHandle(ref, () => ({
//     stopMedia() {
//       if (videoRef.current) {
//         videoRef.current.pause();
//         videoRef.current.currentTime = 0;
//       }
//       if (audioRef.current) {
//         audioRef.current.pause();
//         audioRef.current.currentTime = 0;
//       }
//     },
//   }));

//   const toggleMute = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };
//   return (
//     <div className="fullscreen-video-container">
//       <video ref={videoRef} src={VideoSrc} className="fullscreen-video" muted>
//         Your browser does not support the video tag.
//       </video>
//       <audio ref={audioRef} src={AudioSrc} loop>
//         Your browser does not support the audio tag.
//       </audio>
//       <button className="mute-button" onClick={toggleMute}>
//         Listen... {isMuted ? <BiSolidVolumeMute /> : <BiSolidVolumeFull />}
//       </button>
//       {children}
//     </div>
//   );
// });

// import PropTypes from "prop-types";

// Scene.displayName = "Scene";

// Scene.propTypes = {
//   VideoSrc: PropTypes.string.isRequired,
//   AudioSrc: PropTypes.string.isRequired,
//   children: PropTypes.node,
// };

// export default Scene;

// src/components/CampfireScene.jsx
import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { BiSolidVolumeMute, BiSolidVolumeFull } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const Scene = forwardRef(function Scene(
  { VideoSrc, AudioSrc, PosterSrc, children },
  ref
) {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = React.useState(true);
  const location = useLocation();

  useEffect(() => {
    const video = videoRef.current;

    // loop the video
    const handleVideoEnd = () => {
      video.currentTime = 1;
      video.play();
    };
    video.addEventListener("ended", handleVideoEnd);
    video.play();

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    stopMedia() {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    },
  }));

  const toggleMute = () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (isMuted) {
    audio.play();
    audio.muted = false;
  } else {
    audio.pause();
    audio.muted = true;
  }

  setIsMuted(!isMuted);
};

  return (
    <div className="relative w-screen h-screen">
      {/* Video on md+ */}
      <video
        ref={videoRef}
        src={VideoSrc}
        poster={PosterSrc}
        muted
        autoPlay
        loop
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Poster image on small screens */}
      <img
        src={PosterSrc}
        alt="Scene poster"
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-[87%_0%]"
      />

      <audio ref={audioRef} src={AudioSrc} loop />

      <div className="py-20 lg:p-50 absolute inset-0 z-10 overflow-hidden overflow-x-hidden">
        {/* Mute/unmute button */}
        {location.pathname === "/home" && (
          <>
          <button
            onClick={toggleMute}
            className={`
            absolute top-4 left-4
            px-4 py-2
            inline-flex items-center space-x-2
            bg-[#9e8b76] text-white
            rounded text-xl
            hover:bg-[#776858]/90 transition
            cursor-pointer
            contact-btn-font
          `}
          >Listen...{isMuted ? <BiSolidVolumeMute /> : <BiSolidVolumeFull />}</button>
          </>
        )}

        {/* Children components */}

        {children}
      </div>
    </div>
  );
});

export default Scene;
