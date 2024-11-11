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
      if (window.innerWidth <= 767) {
        setOffset(-60); // Smaller offset for mobile screens
      } else {
        setOffset(-30); // Larger offset for desktop screens
      }
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Run the handler on mount to set the initial offset
    handleResize();

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (section) => {
    if (activeLink !== section) {
      setActiveLink(section);
    }
    setIsNavOpen(false);
  };

  return (
    <div id="home">
      <div className="container-fluid fixed-top">
        <header className="navbar navbar-expand-lg">
          <a href="/" className="navbar-brand">
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
              <li className="nav-item">
                <Link
                  to="home"
                  smooth={true}
                  duration={300}
                  offset={offset} // Dynamic offset based on screen size
                  className={`nav-link ${
                    activeLink === "home" ? "active" : ""
                  }`}
                  onClick={() => handleClick("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={offset} // Dynamic offset based on screen size
                  className={`nav-link ${
                    activeLink === "about" ? "active" : ""
                  }`}
                  onClick={() => handleClick("about")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="products"
                  smooth={true}
                  duration={300}
                  offset={offset} // Dynamic offset based on screen size
                  className={`nav-link ${
                    activeLink === "products" ? "active" : ""
                  }`}
                  onClick={() => handleClick("products")}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="distributors"
                  smooth={true}
                  duration={700}
                  offset={offset} // Dynamic offset based on screen size
                  className={`nav-link ${
                    activeLink === "distributors" ? "active" : ""
                  }`}
                  onClick={() => handleClick("distributors")}
                >
                  Distributors
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={700}
                  offset={offset} // Dynamic offset based on screen size
                  className={`nav-link ${
                    activeLink === "contact" ? "active" : ""
                  }`}
                  onClick={() => handleClick("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
