import PageLayout from "../PageLayout";
import courses from "./CourseData.json";
import "./Courses.css";

function Courses() {
  return (
    <PageLayout className="courses" title="Courses">
      <div className="portrait-wrapper">
        <img src="/Portfolio-Website-V2/UCSC.png" className="portrait"></img>
      </div>
      <p>
        UC Santa Cruz offers the ideal combination of academic excellence and
        location for my studies in computer science. Its highly regarded
        computer science program, along with its proximity to Silicon Valley,
        provides invaluable opportunities for professional development.
        Additionally, the campus's setting in one of the most beautiful forests
        in the country creates a perfect environment for both study and my
        interests.
      </p>
      <p>
        Below are the relevant courses I have completed during my four years at
        UCSC, each of which has played a crucial role in developing my skills
        and preparing me for a career.
      </p>
      <div className="course-wrapper">
        {courses.map((course, index) => (
          <h2 key={index} onClick={() => window.open(course.link, "_blank")}>
            {course.name}
          </h2>
        ))}
      </div>
    </PageLayout>
  );
}
export default Courses;
