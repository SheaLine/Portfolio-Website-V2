import React from "react";
import Carousel from "../ImgCarousel/ImgCarousel";
import LinkBtn from "./LinkBtn";
import "./Projects.css";

function Project({ title, skills, description, links, slides }) {
  return (
    <>
      <h3 className="h3-font text-4xl">{title}</h3>
      <div className="skills">
        {skills.map((skill, index) => (
          <h4 key={index}>{skill}</h4>
        ))}
      </div>
      {description.map((paragraph, index) => (
        <p className="p-font md:text-xl" key={index}>{paragraph}</p>
      ))}
      <div
        className={`buttons ${
          links.length === 1
            ? "one-button"
            : links.length === 2
            ? "two-buttons"
            : ""
        }`}
      >
        {links.map((link, index) => (
          <LinkBtn key={index} text={link.text} target={link.target} />
        ))}
      </div>
      <Carousel data={slides} />
      <div className="line" />
    </>
  );
}
export default Project;
