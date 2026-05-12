import React from "react";
import "../HeroSection/HeroSection.css";
import myImg from "../../assets/me.jpg";
import { Typewriter } from "react-simple-typewriter";
import BackHandIcon from "@mui/icons-material/BackHand";
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <div className="hero-section section " id="home">
      <div className="container">
        <div className="content">
          <i className="boi-i">Software engineer,</i>
          <motion.h1
            className="name"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Amr Khaled
          </motion.h1>
          <motion.h1
            className="type"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            I'm a{" "}
            <span>
              <Typewriter
                words={[
                  // "MERN-Stack Developer",
                  // "Next.js Developer",
                  "Web Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            I specialize in building scalable full-stack applications using
             React, and modern web technologies. I have hands-on
            experience developing real-world projects with authentication, APIs,
            and responsive UI, focusing on performance, clean code, and user
            experience.
          </motion.p>

          <motion.a
            href="#contact"
            className="hi a-btn"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", delay: 1.5 }}
          >
            Let's Connect,
            <BackHandIcon className="hi hand-icon" />
          </motion.a>
        </div>

        <div className="img-box">
          <img src={myImg} alt="Amr khaled" data-aos="zoom-in" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
