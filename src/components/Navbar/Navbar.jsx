import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Navbar/Navbar.css";
import { toggleMenu } from "../../features/active/activeSlice";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
  const [theme, setTheme] = useState(false)
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
  }, [theme])

  return (
    <header>
      <div className="navbar">

        {/* Hamburger menu toggle button */}
        <button className="menu-toggle" onClick={handleToggleMenu} aria-label="Toggle Menu">
          {!menuOpen && <MenuIcon fontSize="large" />}
        </button>

        <div className="nav-side1">
          <div className="logo">
            <h1> ؏َے</h1>
          </div>

          {/*  Theme Toggle */}

          <button onClick={toggleTheme}
            className="theme-toggle"
          >
            {theme ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
        </div>


        <div className={`listItems ${menuOpen ? "active" : ""}`}>
          <button className="menu-toggle clone-btn" onClick={handleToggleMenu}>
            <CloseIcon fontSize="large" />
          </button>
          <div className="nav-links">
            <a href="#home" className="item"> <HomeIcon fontSize="small" /> Home</a>
            <a href="#about" className="item"> <InfoIcon fontSize="small" /> About</a>
            <a href="#skills" className="item"><BuildIcon fontSize="small" />Skills</a>
            <a href="#projects" className="item"><WorkIcon fontSize="small" /> Projects</a>
            <a href="#contact" className="item"><PhoneIcon fontSize="small" />Contact Me</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
