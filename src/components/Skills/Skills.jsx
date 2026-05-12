import React, { useState, useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons for skills section
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiAuth0, SiFramer } from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      type: "frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React" },
      ],
    },
    {
      title: "Backend Development",
      type: "backend",
      isComingSoon: true,
      skills: [
        { icon: <FaDatabase />, name: "Node.js" },
        { icon: <FaDatabase />, name: "MongoDB" },
      ],
    },
    {
      title: "Tools & Extras",
      type: "tools",
      skills: [
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <FaDatabase />, name: "SQL" },
        { icon: <SiFramer />, name: "Framer Motion" },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.type === activeTab);

  return (
    <section className="skills-section" id="skills" data-aos="fade-up">
      <div className="section-heading">
        <h2 data-aos="fade-down">My Skills</h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Technologies I've mastered and my future roadmap
        </p>
      </div>

      <div className="skills-filter" data-aos="zoom-in" data-aos-delay="300">
        {["All", "frontend", "backend", "tools"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active" : ""}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="skills-categories">
        {filteredCategories.map((category, i) => (
          <div
            key={i}
            className={`skills-category ${category.isComingSoon ? "coming-soon" : ""}`}
            data-aos="fade-up"
          >
            <h3 className="category-title">
              {category.title}
              {category.isComingSoon && (
                <span className="soon-badge">Soon</span>
              )}
            </h3>

            <div className="skills-icons">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <div className="icon-wrapper">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
