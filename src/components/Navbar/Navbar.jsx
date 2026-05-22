import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Navbar/Navbar.css";
import { toggleMenu } from "../../features/active/activeSlice";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useMotionValue, useTransform, motion } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme) {
      root.classList.remove("dark-theme");
      root.classList.add("light-theme");
    } else {
      root.classList.remove("light-theme");
      root.classList.add("dark-theme");
    }
  }, [theme]);

  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const dPath = useTransform([dragX, dragY], ([latestX, latestY]) => {
    const startX = 22;
    const startY = 0;
    const endX = 22 + latestX;
    const endY = 250 + latestY; //height of the rope-svg-element (250px) + dragY for vertical movement

    const n = 16;
    let points = `M ${startX},${startY}`;

    for (let i = 1; i < n; i++) {
      const t = i / n;
      const pY = endY * t;

      const baseX = startX + latestX * t;
      const waveFreq = 1 + Math.abs(latestX) * 0.005;
      const wave =
        Math.sin(t * Math.PI * waveFreq) *
        (latestX * 0.45) *
        Math.sin(t * Math.PI);

      const pX = baseX + wave;
      points += ` L ${pX},${pY}`;
    }

    points += ` L ${endX},${endY}`;

    return points;
  });

  return (
    <header>
      <div className="navbar">
        {/* Hamburger menu toggle button */}
        <button
          className="menu-toggle"
          onClick={handleToggleMenu}
          aria-label="Toggle Menu"
        >
          {!menuOpen && <MenuIcon fontSize="large" />}
        </button>

        <div className="nav-side1">
          <div className="logo">
            <h1> ؏َے</h1>
          </div>

          <div className="rope-physics-container">
            <svg className="rope-svg-element">
              <motion.path
                d={dPath}
                fill="none"
                stroke="var(--purple)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <motion.div
              drag
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              dragElastic={1.8}
              style={{ x: dragX, y: dragY, cursor: "grab" }}
              onDragEnd={(event, info) => {
                if (info.offset.y > 45) {
                  toggleTheme();
                }
              }}
              className="theme-toggle-handle"
            >
              {theme ? <DarkModeIcon /> : <LightModeIcon />}
            </motion.div>
          </div>
        </div>

        <div className={`listItems ${menuOpen ? "active" : ""}`}>
          <button className="menu-toggle clone-btn" onClick={handleToggleMenu}>
            <CloseIcon fontSize="large" />
          </button>
          <div className="nav-links">
            <a href="#home" className="item">
              <HomeIcon fontSize="small" /> Home
            </a>
            <a href="#about" className="item">
              <InfoIcon fontSize="small" /> About
            </a>
            <a href="#skills" className="item">
              <BuildIcon fontSize="small" /> Skills
            </a>
            <a href="#projects" className="item">
              <WorkIcon fontSize="small" /> Projects
            </a>
            <a href="#contact" className="item">
              <PhoneIcon fontSize="small" /> Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
