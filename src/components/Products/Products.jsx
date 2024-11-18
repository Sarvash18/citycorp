import React from "react";
import "./Products.css";
import HardwareOrnaments from "../../images/Hardware ornaments.webp";
import Brass from "../../images/Builders Brass & Aluminium Fancy Fitting.webp";
import Pvc from "../../images/PVC Decorative Profiles.webp";
import StainlessSteel from "../../images/Stainless Steel Channels.webp";
import SaintGoblin from "../../images/Saint-Gobain Mesh.webp";
import Pys from "../../images/PYS Furniture Fittings.webp";

const Products = () => {
  return (
    <div id="products">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="true"
      >
        <h1 class="text-center mt-5">Our Products</h1>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner carousal-custom">
          <div className="carousel-item active">
            <img
              src={HardwareOrnaments}
              className="d-block w-100 carousal-fill"
              alt="..."
            />
            <div className="carousel-caption  d-md-block">
              <h5 className="playfair fw-bold">Hardware Ornaments</h5>
              <p className="questrial">
                Elegant and durable hardware designs to add a touch of class to
                your home.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Brass}
              className="d-block w-100 carousal-fill"
              alt="..."
            />
            <div className="carousel-caption  d-md-block">
              <h5 className="playfair fw-bold">
                Brass & Aluminium Fancy Fitting
              </h5>
              <p className="questrial">
                High-quality brass and aluminum fittings for a perfect blend of
                style and strength.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Pvc} className="d-block w-100 carousal-fill" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h5 className="playfair fw-bold"> ⁠PVC Decorative Profiles</h5>
              <p className="questrial">
                Versatile PVC profiles crafted to enhance aesthetics and
                durability.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={StainlessSteel}
              className="d-block w-100 carousal-fill"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <h5 className="playfair fw-bold">⁠Stainless Steel Channels</h5>
              <p className="questrial">
                Premium stainless steel channels for sturdy and lasting support.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={SaintGoblin}
              className="d-block w-100 carousal-fill"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <h5 className="playfair fw-bold">Saint-Gobain Mesh</h5>
              <p className="questrial">
                High-performance mesh by Saint-Gobain for superior protection
                and ventilation.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Pys} className="d-block w-100 carousal-fill" alt="..." />
            <div className="carousel-caption  d-md-block">
              <h5 className="playfair fw-bold">⁠PYS Furniture Fittings</h5>
              <p className="questrial">
                Reliable and stylish furniture fittings for every space and
                style.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Products;
