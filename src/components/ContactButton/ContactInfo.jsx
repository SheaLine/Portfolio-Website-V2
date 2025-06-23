import React from "react";
import { FaPhoneSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <>
      <h2 className="h2-font">Contact Me</h2>
      <div className="contact">
        <div className="contact-item">
          <FaPhoneSquare color="white" className="icon" />
          <span>707-479-6922</span>
        </div>
        <div className="contact-item">
          <IoMdMail className="icon" />
          <span>sline@ucsc.edu</span>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/shea-line-ab3918224/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
