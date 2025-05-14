// import React, { useState, useEffect } from "react";
import "./HoverBox.css";

// import { FaEllipsisH } from "react-icons/fa";

function HoverBox({ Text, onClick }) {
  // const [isHovered, setIsHovered] = useState(false);
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial state based on screen size

  // const handleResize = () => {
  //   setIsMobile(window.innerWidth <= 768); // Update state on resize
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize); // Add event listener for resize
  //   return () => {
  //     window.removeEventListener("resize", handleResize); // Cleanup on unmount
  //   };
  // }, []);

  return (
    <button className="mobile-button" onClick={onClick}>
      {Text}
    </button>
  );
}

export default HoverBox;
