import React, { useState } from "react";
import PageLayout from "../PageLayout";
import Project from "../Projects/ProjectSkel";
import "./Experience.css";

import BlueFin from "./ExperienceData/BlueFin.json";

function Experience() {
  return (
    <PageLayout className="experience" title="Work Experience">
      <div className="line"></div>
      <Project {...BlueFin} />
    </PageLayout>
  );
}
export default Experience;
