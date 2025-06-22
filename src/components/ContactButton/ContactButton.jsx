import { useState } from "react";
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
      <button
        className="px-4 py-2
            inline-flex items-center space-x-2
            bg-[#9e8b76] text-white
            rounded text-xl
            hover:bg-[#776858]/90 transition
            cursor-pointer
            contact-btn-font"
        onClick={OpenContainer}
      >
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
