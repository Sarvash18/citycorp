import React, { useState, useEffect } from "react";
import "./Hero.css";
import Card from "../Card/Card";
import syedImran from '../../images/Syed Imran.jpeg';
import faisal from "../../images/Faisal.jpeg"
import sheik from "../../images/Sheik.jpeg"
import Card2 from "../Card2/Card2";

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
      <div className="px-4 py-5 mt-5  text-center">
        <h1 className="display-4  mt-4 text-body-emphasis font">
          City Corporation Hardwares
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead questrial">
            "Crafted for your home - Quality you can trust"
          </p>
        </div>
      </div>
      <div
        className={`card-container d-flex flex-column flex-md-row gap-5  ${
          isMobile ? "mx-4" : ""
        }`}
      >
        <Card2
          name="Mr.Sheik Dawood"
          job="Managing Partner"
          image={sheik}
          wap="https://wa.me/+919842470433"
          phone="tel:+919842470433"
        />
        <Card2
          name="Mr.Faisal Hussain"
          job="Partner"
          image={faisal}
          wap="https://wa.me/+919443460300"
          phone="tel:+919443460300"
        />
        <Card2
          name="Mr.Syed Imran"
          job="Partner"
          image={syedImran}
          wap="https://wa.me/+919698333833"
          phone="tel:+919698333833"
        />
      </div>
    </div>
  );
};

export default Hero;
