import React, { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import ContactInfo from "./ContactInfo";
import LinkBtn from "../Projects/LinkBtn";
import "./ContactButton.css";

function ContactBtn({ text, target }) {
  const [showContainer, setShowContainer] = useState(false);
  const OpenContainer = () => {
    setShowContainer(true);
  };
  const CloseContainer = () => {
    setShowContainer(false);
  };

  return (
    <>
      <button className="contact-button" onClick={OpenContainer}>
        {text}
      </button>

      <div className={`contact-container ${showContainer ? "show" : ""}`}>
        <IoCloseCircleSharp className="close-btn" onClick={CloseContainer} />
        <div className="info-wrapper">
          <ContactInfo />
          {/* Make sure to change target when deploying */}
          <LinkBtn text={"My Resume"} target={"http://localhost:5173/resume"} />
        </div>
      </div>
    </>
  );
}

export default ContactBtn;
