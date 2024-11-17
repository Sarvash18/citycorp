import React from "react";
import "./Distributors.css";
import logos from "../../logos";

const Distributors = () => {
  return (
    <div className="text-center h1 my-5 font" id="distributors">
      Our Distributors
      <div className="logo-container">
        <div className="container">
          <div className="row">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="col-4 col-md-3 col-lg-2 d-flex justify-content-center"
              >
                <a
                  href={logo.url}
                  className="logo-hover"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logo.img}
                    alt={`Distributor Logo ${index + 1}`}
                    className="logo"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distributors;
