import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

function BackButton({ handleFadeOut }) {
  const navigate = useNavigate();
  return (
    <button onClick={() => handleFadeOut(() => navigate("/home"))}>
      <IoArrowBackCircle className="back-btn" />
    </button>
  );
}

export default BackButton;
