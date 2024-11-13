import React, { useState, useEffect } from "react";
import cardData from "../../decorData";
import "./Decorations.css";

const CardComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if the screen width is mobile size (<= 768px)
    };

    handleResize(); // Call it on initial load
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, []);

  return (
    <div className="text-center h1 my-5" id="products">
      Our Decorative Solutions
      <div className="container mt-4 d-flex justify-content-around">
        <div
          className="d-flex justify-content-around flex-wrap"
          style={{
            gap: "24px",
            maxWidth: "100%",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {cardData.map((card) => (
            <div
              className="card"
              key={card.id}
              style={{
                width:
                  isMobile && card.id === 5
                    ? "100%"
                    : isMobile
                    ? "45%"
                    : "15rem", // 45% width for 2 cards per row on mobile
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{ width: "100%", height: "160px", overflow: "hidden" }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                className="card-body d-flex flex-column"
                style={{ flexGrow: 1 }}
              >
                <h5
                  className="card-title"
                  style={{
                    fontSize: isMobile ? "1rem" : "1.25rem", // Reduce font size on mobile
                  }}
                >
                  {card.title}
                </h5>
                <p
                  className="card-text"
                  style={{
                    flexGrow: 1,
                    fontSize: isMobile ? "0.875rem" : "1rem", // Reduce font size on mobile
                  }}
                >
                  {card.content}
                </p>
                <a href={card.link} className="btn btn-primary mt-auto">
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
