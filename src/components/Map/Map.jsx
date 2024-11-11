import React from "react";
import "./Map.css"; // Optionally add styling for your map container
const Maps = () => {
  return (
    <div className="map-container">
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.0209986044033!2d78.69263289999999!3d10.8198796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5a8f5c82009%3A0xed77976d57440e93!2sCITY%20CORPORATION!5e1!3m2!1sen!2sin!4v1728027329467!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
      
    </div>
  );
};

export default Maps;
