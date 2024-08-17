import { useState } from "react";
import "./AboutMe.css";
import { useNavigate } from "react-router-dom";

function AboutMe() {
  const navigate = useNavigate();
  return (
    <div className="test">
      <h1>About Me</h1>
      <p>This is the About Me page.</p>
      <button onClick={() => navigate("/home")}>Back To Home</button>
    </div>
  );
}
export default AboutMe;
