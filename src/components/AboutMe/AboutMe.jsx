import PageLayout from "../PageLayout";
import Carousel from "../ImgCarousel/ImgCarousel";
import { slides } from "../ImgCarousel/CarouselData.json";
import { FaPhoneSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./AboutMe.css";

function AboutMe() {
  return (
    <PageLayout className="about-me" title="Hello There!">
      <div className="portrait-wrapper">
        <img src="/self.png" className="portrait"></img>
      </div>
      <p>
        My name is Shea Line and I am from Northern California. I will be
        earning a Bachelor of Science in Computer Science at the University of
        California, Santa Cruz in June 2025. I have a passion for building all
        things technology, from software engineering to UI/UX. I love learning
        how to harness the power of computers to solve real world problems. I am
        eager to bring my abilities to a forward thinking team that demands my
        strong organizational and analytical skills.
      </p>
      <Carousel data={slides} />
      <p>
        In addition to my love of technology, I am interested in the outdoors. I
        love to backpack, camp, hike, and snowboard. I think that the best
        stories I have ever been told have been around a campfire, so I decided
        to tell mine around a virtual one that I created. Despite my admiration
        for tech, being able to connect outside of technology is something that
        I am very passionate about. I believe a campfire is the best way to do
        that. I want my career to be dedicated to continuing to tell these
        stories through technology, whether that be an application, a video
        game, or AI.
      </p>
      <div className="contact-wrapper">
        <h2>Contact Me</h2>

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
      </div>
    </PageLayout>
  );
}
export default AboutMe;
