import React, { useState } from "react";
import "./HoverBox.css";

import { FaEllipsisH } from "react-icons/fa";

function HoverBox({ Text, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="box">
        {isHovered ? (
          <span className="text">{Text}</span>
        ) : (
          <FaEllipsisH color="Black" />
        )}
      </div>
    </div>
  );
}

export default HoverBox;
