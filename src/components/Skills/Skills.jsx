import React, { useEffect, useState } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import {
  SiFramer,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      type: "frontend",
      accent: "#5eead4",
      skills: [
        {
          icon: <FaHtml5 />,
          name: "HTML",
          badge: "Advanced",
          accent: "#e34f26",
        },
        {
          icon: <FaCss3Alt />,
          name: "CSS",
          badge: "Advanced",
          accent: "#264de4",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind",
          badge: "Layout / UI",
          accent: "#38bdf8",
        },
        {
          icon: <FaJs />,
          name: "JavaScript",
          badge: "Advanced",
          accent: "#f7df1e",
        },
        {
          icon: <SiTypescript />,
          name: "TypeScript",
          badge: "Strong",
          accent: "#3178c6",
        },
        {
          icon: <FaReact />,
          name: "React",
          badge: "Advanced",
          accent: "#61dafb",
        },
      ],
    },
    {
      title: "Backend Development",
      type: "backend",
      accent: "#f59e0b",
      isComingSoon: true,
      skills: [
        {
          icon: <FaNodeJs />,
          name: "Node.js",
          badge: "Building",
          accent: "#84cc16",
        },
        {
          icon: <SiMongodb />,
          name: "MongoDB",
          badge: "Building",
          accent: "#10b981",
        },
      ],
    },
    {
      title: "Tools & Extras",
      type: "tools",
      accent: "#a78bfa",
      skills: [
        {
          icon: <FaGithub />,
          name: "GitHub",
          badge: "Workflow",
          accent: "#ffffff",
        },
        {
          icon: <FaDatabase />,
          name: "SQL",
          badge: "Working",
          accent: "#38bdf8",
        },
        {
          icon: <SiFramer />,
          name: "Framer Motion",
          badge: "Motion",
          accent: "#f472b6",
        },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.type === activeTab);

  return (
    <section className="skills-section" id="skills" data-aos="fade-up">
      <div className="skills-shell">
        <header className="skills-header">
          <div className="skills-heading-copy">
            <h2 data-aos="fade-down">My Skills</h2>
          </div>
        </header>

        <div className="skills-filter" data-aos="zoom-in" data-aos-delay="250">
          {[
            { key: "All", label: "All" },
            { key: "frontend", label: "Frontend" },
            { key: "backend", label: "Backend" },
            { key: "tools", label: "Tools" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={activeTab === tab.key ? "active" : ""}
              aria-pressed={activeTab === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="skills-categories">
          {filteredCategories.map((category, i) => (
            <article
              key={category.type}
              className={`skills-category ${category.isComingSoon ? "coming-soon" : ""}`}
              style={{ "--category-accent": category.accent }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3>{category.title}</h3>

              <div className="skills-chips">
                {category.skills.map((skill, index) => (
                  <article
                    key={skill.name}
                    className="skill-card"
                    tabIndex={0}
                    style={{ "--skill-accent": skill.accent }}
                    data-aos="zoom-in"
                    data-aos-delay={index * 60}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-card__content">
                      <h4>{skill.name}</h4>
                      <span className="skill-badge">{skill.badge}</span>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
