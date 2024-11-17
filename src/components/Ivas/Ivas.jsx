import React from "react";
import "./Ivas.css";
import ModularKitchen from "../../images/Modular Kitchen.jpg";
import StorageUnit from "../../images/Storage unit.jpeg";
import Wardrobe from "../../images/Wardrobe.jpeg";

const Ivas = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div className="text-center h1 my-5 font" id="products">
      Our Franchise - IVAS Modular Kitchens & Wardrobes
      <div id="ivas" className="mt-4">
        <div className="cards-group ">
          <div className="cards">
            <img src={ModularKitchen} />

            <div className="layer"></div>

            <div className="info">
              <h2 className="fw-bold playfair">Modular Kitchen</h2>

              <p className="questrial">
                Crafted for convenience and style, making your cooking space
                efficient and beautiful.
              </p>

              <button>
                <a
                  style={linkStyle}
                  href="https://www.ivas.homes/download-catalogue/Modular-Kitchen.pdf"
                >
                  Explore
                </a>
              </button>
            </div>
          </div>

          <div className="cards">
            <img src={StorageUnit} />

            <div className="layer"></div>

            <div className="info">
              <h2 className="fw-bold playfair " h1>
                Storage Units
              </h2>

              <p className="questrial ">
                Maximize your space with innovative storage solutions that keep
                everything organized.
              </p>

              <button>
                <a
                  style={linkStyle}
                  href="https://www.ivas.homes/download-catalogue/storage-unit.pdf"
                >
                  Explore
                </a>
              </button>
            </div>
          </div>
          <div className="cards">
            <img src={Wardrobe} />

            <div className="layer"></div>

            <div className="info">
              <h2 className="fw-bold  playfair">Wardrobe Designs</h2>

              <p className="questrial">
                Elevate your wardrobe with customized designs that blend
                functionality and elegance.
              </p>

              <button>
                <a
                  style={linkStyle}
                  href="https://www.ivas.homes/download-catalogue/modular-wardrobes.pdf"
                >
                  Explore
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ivas;
