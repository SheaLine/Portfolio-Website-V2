// import React, { useState, useEffect } from "react";
import "./HoverBox.css";

// import { FaEllipsisH } from "react-icons/fa";

function HoverBox({ Text, onClick }) {
  return (
    <button className="mobile-button" onClick={onClick}>
      {Text}
    </button>
  );
}

export default HoverBox;
