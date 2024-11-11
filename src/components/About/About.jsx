import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <h1 className="text-center mt-4">About us</h1>
      <div className="about-section text-left d-flex align-items-center justify-content-center ">
        <div className="overlay text-white p-4 rounded">
          <h1 className="display-5 fw-bold">Our Path to Success</h1>
          <p className="lead">
            From our commitment to delivering high-quality architectural
            hardware to our expertise in aluminum extrusion fittings, City
            Corporation is dedicated to enhancing the strength, functionality,
            and aesthetic of residential spaces. With a focus on innovation and
            reliability, we are here to support homeowners and builders alike,
            ensuring excellence in every project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
