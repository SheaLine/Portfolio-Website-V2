/* eslint-disable no-undef */
// // Home.jsx
// import React, { useRef, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Scene from "../CampfireScene";
// import HoverBox from "../HoverBox";
// import withFadeEffect from "../Fade";
// import ContactBtn from "../ContactButton/ContactButton";
// import "./Home.css";

// function Home({ handleFadeOut }) {
//   const sceneRef = useRef(null);
//   const navigate = useNavigate();

//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [focusX, setFocusX] = useState("80%");

//   useEffect(() => {
//     // calculate piecewise-linear focusX based on viewport width
//     function calcFocusX(w) {
//       if (w <= 425) {
//         // 320 → 425 px maps 87% → 92%
//         const m1 = (92 - 87) / (425 - 320);
//         const b1 = 87 - m1 * 320;
//         return `${(m1 * w + b1).toFixed(2)}%`;
//       } else if (w <= 768) {
//         // 425 → 768 px maps 92% → 73%
//         const m2 = (73 - 92) / (768 - 425);
//         const b2 = 92 - m2 * 425;
//         return `${(m2 * w + b2).toFixed(2)}%`;
//       }
//       // above 768px clamp at 73%
//       return "80%";
//     }

//     function onResize() {
//       const w = window.innerWidth;
//       setIsMobile(w <= 768);
//       setFocusX(calcFocusX(w));
//     }

//     window.addEventListener("resize", onResize);
//     onResize();
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const handleClick = (path) => {
//     handleFadeOut(() => {
//       sceneRef.current?.stopMedia();
//       navigate(path);
//     });
//   };

//   return (
//     <>
//       {isMobile ? (
//         <div
//           className="mobile-scene"
//           style={{ "--focus-x": focusX, "--focus-y": "25%" }}
//         >
//           <div className="title">
//             Shea Line
//             <div className="heading">A Developer&apos;s Campfire Story</div>
//           </div>

//           <div className="navigation-boxes">
//             <HoverBox
//               Text="About Me"
//               onClick={() => handleClick("/about-me")}
//             />
//             <HoverBox
//               Text="Projects"
//               onClick={() => handleClick("/projects")}
//             />
//             <HoverBox
//               Text="Experience"
//               onClick={() => handleClick("/experience")}
//             />
//             <HoverBox Text="Courses" onClick={() => handleClick("/courses")} />
//           </div>

//           <div className="contact-btn">
//             <ContactBtn text="Contact Me" />
//           </div>
//         </div>
//       ) : (
//         <Scene
//           ref={sceneRef}
//           VideoSrc="./Blender-Camp-Scene.mp4"
//           AudioSrc="./CampAudio.mp3"
//         >
//           <div className="title">
//             Shea Line
//             <div className="heading">A Developer&apos;s Campfire Story</div>
//           </div>

//           <div className="navigation-boxes">
//             <HoverBox
//               Text="About Me"
//               onClick={() => handleClick("/about-me")}
//             />
//             <HoverBox
//               Text="Projects"
//               onClick={() => handleClick("/projects")}
//             />
//             <HoverBox
//               Text="Experience"
//               onClick={() => handleClick("/experience")}
//             />
//             <HoverBox Text="Courses" onClick={() => handleClick("/courses")} />
//           </div>

//           <div className="contact-btn">
//             <ContactBtn text="Contact Me" />
//           </div>
//         </Scene>
//       )}
//     </>
//   );
// }

// export default withFadeEffect(Home, "fade-exit-active");

// src/pages/Home.jsx
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Scene from "../CampfireScene";
import HoverBox from "../HoverBox";
import withFadeEffect from "../Fade";
import ContactBtn from "../ContactButton/ContactButton";
import "../../App.css";

function Home({ handleFadeOut }) {
  const sceneRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (path) => {
    handleFadeOut();
    setTimeout(() => navigate(path), 300);
  };
  
  return (
    <Scene
      ref={sceneRef}
      VideoSrc= {process.env.NODE_ENV === "development" ? "/Blender-Camp-Scene.mp4" : "/Portfolio-Website-V2/Blender-Camp-Scene.mp4"}
      AudioSrc= {process.env.NODE_ENV === "development" ? "/CampAudio.mp3" : "/Portfolio-Website-V2/CampAudio.mp3"}
      PosterSrc= {process.env.NODE_ENV === "development" ? "/Blender-Camp-Scene.png" : "/Portfolio-Website-V2/Blender-Camp-Scene.png"}
    >
      <div className="absolute top-4 right-4 z-20">
        <ContactBtn
          text="Contact Me"
          className="px-4 py-2 bg-btn text-white rounded font-mono hover:bg-btn-hover transition"
        />
      </div>

      <div className="flex flex-col items-center md:items-start justify-center px-6 space-y-6">
        {/* TITLE */}
        <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-[Monoton] text-[#d0b100] drop-shadow-lg">
            SheaLine
          </h1>
          <p className="custom-subtitle text-lg/3 md:text-2xl/3 lg:text-4xl/3 text-[#d0b100] self-end">
            A Developer’s Campfire Story
          </p>

          <div className="flex flex-col justify-center my-15 md:self-center md:flex-row space-y-4 md:space-y-0 md:space-x-10">
            <HoverBox
              Text="About Me"
              onClick={() => handleClick("/about-me")}
            />
            <HoverBox
              Text="Projects"
              onClick={() => handleClick("/projects")}
            />
            <HoverBox
              Text="Experience"
              onClick={() => handleClick("/experience")}
            />
            <HoverBox Text="Courses" onClick={() => handleClick("/courses")} />
          </div>
        </div>
      </div>
    </Scene>
  );
}

export default withFadeEffect(Home, "fade-exit-active");
