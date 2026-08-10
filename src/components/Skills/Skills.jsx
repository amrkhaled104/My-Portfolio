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
      description:
        "I build responsive frontends with a focus on clarity, rhythm, and interaction polish.",
      skills: [
        {
          icon: <FaHtml5 />,
          name: "HTML",
          detail: "Semantic markup, accessibility, and SEO-friendly structure.",
          level: "Proficiency: Advanced",
          experience: "Experience: 4+ years",
          tags: ["semantic", "a11y"],
          accent: "#e34f26",
        },
        {
          icon: <FaCss3Alt />,
          name: "CSS",
          detail: "Responsive layouts, visual rhythm, and handcrafted motion.",
          level: "Proficiency: Advanced",
          experience: "Experience: 4+ years",
          tags: ["layout", "motion"],
          accent: "#264de4",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind",
          detail:
            "Fast composition when a utility-first workflow keeps the system sharp.",
          level: "Proficiency: Strong",
          experience: "Experience: 3+ years",
          tags: ["utilities", "design tokens"],
          accent: "#38bdf8",
        },
        {
          icon: <FaJs />,
          name: "JavaScript",
          detail:
            "Interaction logic, DOM orchestration, and UI state choreography.",
          level: "Proficiency: Advanced",
          experience: "Experience: 4+ years",
          tags: ["logic", "interaction"],
          accent: "#f7df1e",
        },
        {
          icon: <SiTypescript />,
          name: "TypeScript",
          detail:
            "Typed interfaces, safer refactors, and predictable application layers.",
          level: "Proficiency: Strong",
          experience: "Experience: 2+ years",
          tags: ["types", "safety"],
          accent: "#3178c6",
        },
        {
          icon: <FaReact />,
          name: "React",
          detail:
            "Component systems, state flow, and polished interface assembly.",
          level: "Proficiency: Advanced",
          experience: "Experience: 3+ years",
          tags: ["components", "state"],
          accent: "#61dafb",
        },
      ],
    },
    {
      title: "Backend Development",
      type: "backend",
      accent: "#f59e0b",
      description:
        "The backend stack is still in progress, but the direction is clear: practical APIs and reliable data handling.",
      isComingSoon: true,
      skills: [
        {
          icon: <FaNodeJs />,
          name: "Node.js",
          detail:
            "Server-side logic, APIs, and tooling that supports the frontend.",
          level: "Roadmap: Active",
          experience: "Focus: Building",
          tags: ["apis", "runtime"],
          accent: "#84cc16",
        },
        {
          icon: <SiMongodb />,
          name: "MongoDB",
          detail:
            "Schema-light data modeling and content-driven storage patterns.",
          level: "Roadmap: Active",
          experience: "Focus: Building",
          tags: ["documents", "data"],
          accent: "#10b981",
        },
      ],
    },
    {
      title: "Tools & Extras",
      type: "tools",
      accent: "#a78bfa",
      description:
        "These are the tools that keep the work tight: version control, motion, and the small details that ship polished UI.",
      skills: [
        {
          icon: <FaGithub />,
          name: "GitHub",
          detail:
            "Branching, reviews, and the release habits that keep projects clean.",
          level: "Proficiency: Strong",
          experience: "Experience: 4+ years",
          tags: ["git", "workflow"],
          accent: "#ffffff",
        },
        {
          icon: <FaDatabase />,
          name: "SQL",
          detail: "Queries, joins, and data shaping for structured backends.",
          level: "Proficiency: Working",
          experience: "Experience: 2+ years",
          tags: ["queries", "data"],
          accent: "#38bdf8",
        },
        {
          icon: <SiFramer />,
          name: "Framer Motion",
          detail: "Micro-interactions and motion systems with a tactile feel.",
          level: "Proficiency: Strong",
          experience: "Experience: 2+ years",
          tags: ["motion", "interaction"],
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
            <p data-aos="fade-up" data-aos-delay="150">
              A curated toolkit for building crisp interfaces, thoughtful
              motion, and systems that feel designed rather than assembled.
            </p>
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

              <p className="category-description">{category.description}</p>

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
                    <div className="skill-card__top">
                      <div className="skill-icon">{skill.icon}</div>
                      <div>
                        <h4>{skill.name}</h4>
                        <p className="skill-tag">{skill.tags.join(" / ")}</p>
                      </div>
                    </div>

                    <p className="skill-card__detail">{skill.detail}</p>

                    <div className="skill-card__meta">
                      <span>{skill.level}</span>
                      <span>{skill.experience}</span>
                    </div>

                    <ul
                      className="skill-card__tags"
                      aria-label={`${skill.name} tags`}
                    >
                      {skill.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              {category.isComingSoon && (
                <p className="category-footnote">
                  Backend layer is being expanded next.
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
