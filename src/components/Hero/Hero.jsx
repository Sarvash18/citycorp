import React, { useState, useEffect } from "react";
import "./Hero.css";
import Card from "../Card/Card";
import syedImran from '../../images/Syed Imran.jpeg';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Hook to detect window width and set isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set true if screen width is less than 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero-image">
      <div className="px-4 py-5 mt-5 text-center">
        <h1 className="display-4 fw-bold mt-4 text-body-emphasis">
          City Corporation Hardwares
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            "Crafted for Your Home - Quality You Can Trust"
          </p>
        </div>
      </div>
      <div
        className={`card-container d-flex flex-column flex-md-row gap-5  ${
          isMobile ? "mx-4" : "ms-5"
        }`}
      >
        <Card
          name=" Mr. Faisal Hussain"
          img={syedImran}
          phone="tel:+919443460300"
          wap="https://wa.me/+919443460300"
        />
        <Card
          name="Mr. Syed Imran"
          img={syedImran}
          phone="tel:+919698333833"
          wap="https://wa.me/+919698333833"
        />
      </div>
    </div>
  );
};

export default Hero;
