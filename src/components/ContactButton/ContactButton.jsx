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
          <LinkBtn
            text={"My Resume"}
            target={"https://shealine.github.io/Portfolio-Website-V2/#/resume"}
          />
        </div>
      </div>
    </>
  );
}

export default ContactBtn;
