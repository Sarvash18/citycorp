import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <div class="col-md-4 alignment">
      <div class="card profile-card-3">
        <div class="background-block">
          <img
            src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="profile-sample1"
            class="background"
          />
        </div>
        <div class="profile-thumb-block">
          <img src={props.img} alt="profile-image" class="profile " />
        </div>
        <div class="card-content">
          <h2>
            {props.name}
            <small>Partner</small>
          </h2>
          <div class="icon-block">
            <a href={props.phone}>
              <i class="fa-solid fa-phone"></i>
            </a>
            <a href={props.wap}>
              <i class="fa-brands fa-whatsapp" style={{ fontSize: "20px" }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
