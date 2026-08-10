import "./About.css";
import about from "../../assets/me2.jpg";
import CV from "../../assets/amrkhaled_cv_front.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import { data } from "react-router-dom";

const About = () => {
  return (
    <div className="about section" id="about">
      <div className="section-heading">
        <h2 data-aos="fade-down">About Me</h2>
        <p data-aos="fade-left">My Story</p>
      </div>

      <div className="about-container">
        <div className="img" data-aos="flip-up">
          <div className="img-overlay">
            <h3>Amr Khaled</h3>
            <p>Software Engineer</p>
          </div>
          <img src={about} alt="Amr Khaled" className="aboutimg" />
        </div>

        <div className="aboutsection content">
          <div className="about-content">
            <p data-aos="fade-up">
              Hi! I'm <i>Amr Khaled</i>. I love learning new things and building
              real projects that people can actually use. My journey started
              with the basics of <i>Software Engineering</i>, where I focused on{" "}
              <b>Problem Solving, Data Structures, and Algorithms</b> to build a
              strong logical mind.
            </p>

            <p data-aos="fade-up">
              I began coding with the <i>C language</i>, which helped me
              understand how software works from the inside. Now, I am focused
              on <b>Frontend Development</b> using <i>React and JavaScript</i>.
              My goal is to become a <b>MERN Stack Developer</b>, and I’m
              currently learning how to build full websites using Node.js,
              Express, and MongoDB.
            </p>

            <p data-aos="fade-up">
              I also love <b>Open Source</b>. I spend time reading and
              contributing to large projects on GitHub. This helps me learn how
              big teams write code and how to work on professional, real-world
              software.
            </p>

            <p data-aos="fade-up">
              I am always looking for the next challenge to grow my skills and
              build better, faster, and more useful digital products.
            </p>
          </div>

          {/* <div className="quote-box" data-aos="fade-up" data-aos-delay="200">
            <p>
               Love the art of coding and always eager to learn new
              technologies.
            </p>
          </div> */}

          <motion.a
            href={CV}
            download
            className="a-btn"
            data-aos="zoom-in"
            data-aos-delay="300"
            initial={{ scale: 4, opacity: 0, rotate: 180, x: -300, y: 300 }}
            animate={{ scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 }}
            transition={{ duration: 1}}
          >
            Download CV <DownloadIcon />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
