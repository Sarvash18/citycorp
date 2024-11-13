import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [offset, setOffset] = useState(-80); // Default offset for larger screens

  useEffect(() => {
    const handleResize = () => {
      setOffset(window.innerWidth <= 767 ? -60 : -30);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial offset on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "products", "distributors", "contact"];
      let foundActiveLink = false;

      // Check each section for the current scroll position
      for (let i = 0; i < sections.length; i++) {
        const sectionElement = document.getElementById(sections[i]);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop -50 + offset;
          const sectionHeight = sectionElement.offsetHeight;
          const scrollPosition = window.scrollY;

          // Update active link if within the current section
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(sections[i]);
            foundActiveLink = true;
            break;
          }
        }
      }

      // Edge case for when at the very top of the page, set "home" as active
      if (
        !foundActiveLink &&
        window.scrollY < document.getElementById(sections[0]).offsetTop + offset
      ) {
        setActiveLink("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on unmount
  }, [offset]);

  const handleClick = (section) => {
    setActiveLink(section); // Set the active link when clicked
    setIsNavOpen(false); // Close the navbar on mobile after clicking
  };

  return (
    <div id="home">
      <div className="container-fluid fixed-top">
        <header className="navbar navbar-expand-lg">
          <a href="#home" className="navbar-brand">
            <img src={logo} className="bi me-2" width="120" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto">
              {["home", "about", "products", "distributors", "contact"].map(
                (section) => (
                  <li className="nav-item" key={section}>
                    <Link
                      to={section}
                      smooth={true}
                      duration={300}
                      offset={offset}
                      className={`nav-link ${
                        activeLink === section ? "active" : ""
                      }`}
                      onClick={() => handleClick(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
