import React, { useState } from "react";
import PageLayout from "../PageLayout";
import Project from "./ProjectSkel";

// project data
import Invasion1 from "./ProjectData/Invasion1.json";
import Quest from "./ProjectData/Quest.json";
import Escape1 from "./ProjectData/Escape1.json";
import ChessAI from "./ProjectData/ChessAI.json";
import Network from "./ProjectData/Network.json";
import Portfolio from "./ProjectData/Portfolio.json";
import "./Projects.css";

function Projects() {
  return (
    <PageLayout className="projects" title="Projects">
      <div className="line"></div>
      <Project {...Portfolio} />
      <Project {...ChessAI} />
      <Project {...Network} />
      <Project {...Escape1} />
      <Project {...Quest} />
      <Project {...Invasion1} />
    </PageLayout>
  );
}
export default Projects;