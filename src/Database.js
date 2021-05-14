import React from "react";
import { Link } from "react-router-dom";
import "./Database.css";

function Database() {
  return (
    <div className="database">
      <div className="header">
        <Link to="/dashboard">
          <img src={window.location.origin + "/back arrow.svg"} alt="back" />
        </Link>
        <p className="p1">data base</p>
      </div>
      <div className="d_card1">
        <div className="image">
          <img
            src={window.location.origin + "/profileimage.jpg"}
            alt="image"
            className="profile_image"
          />
        </div>
        <div className="name2">
          <h1>ragul kumar</h1>
          <p className="location1">mumbai maharastra</p>
        </div>
        <hr className="vertical_hr" />

        <div className="col_date">
          <h4>joining date</h4>
          <p className="join_date">26 jan 2021</p>
        </div>
        <hr className="vertical_hr" />

        <div className="col_slider">
          <input
            type="range"
            min="1"
            max="3"
            defaultValue="1"
            className="slider1"
          />
          <div className="slider_row">
            <p className="slider_name">registered</p>
            <p className="slider_name">interviewed</p>
            <p className="slider_name">onboarded</p>
          </div>
        </div>
        <hr className="vertical_hr" />

        <div className="col_button">
          <Link to="/profile">
            <input type="button" value="view profile" className="button1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Database;
