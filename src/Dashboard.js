import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const handleClick = (id) => {
    var click = document.getElementById("list-items");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
  };
  return (
    <div className="dash">
      <div className="chart">
        <div className="chart_header">
          <div className="chart_left">
            <p className="header_name">state wise stats</p>
          </div>
          <div className="chart_right">
            <div>
              <input type="button" value="s" className="search" />
            </div>
            <div>
              <input
                type="button"
                value="add new champaign"
                className="button1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="chart_boxes">
        <div className="chart_box">
          <p className="p21">total element</p>
          <h1 className="num">1000</h1>
        </div>
        <div className="chart_box">
          <p className="p21">total element</p>
          <h1 className="num">1000</h1>
        </div>
        <div className="chart_box">
          <p className="p21">total element</p>
          <h1 className="num">1000</h1>
        </div>
        <div className="chart_box">
          <p className="p21">total element</p>
          <h1 className="num">1000</h1>
        </div>
      </div>
      <div className="rows">
        <div className="card_row">
          <div className="col21">
            <h3>jiomart delivery executive</h3>
            <div className="row12">
              <h4 className="num1">4564</h4>
              <h4 className="location">mumbai, maharstra</h4>
            </div>
          </div>
          <hr className="vertical_hr" />
          <div className="col22">
            <p className="p23">
              campaign description campaign description campaign description
              campaign description
            </p>
          </div>
          <hr className="vertical_hr" />
          <div className="col23">
            <p className="p24">campaign status</p>
            <div className="switch_row">
              <label class="switch">
                <input type="checkbox" checked />
                <span className="slider round"></span>
              </label>
              <p className="p25">active</p>
            </div>
            <p className="p26">expires in 2 days</p>
          </div>
          <hr className="vertical_hr" />
          <div className="col24">
            <h3>470</h3>
            <Link to="/database">
              <input type="button" value="database" className="button1" />
            </Link>
          </div>

          <p className="dots" id="list" onClick={(id) => handleClick(id)}>
            ...
          </p>
          <div
            className="small_card"
            id="list-items"
            style={{ display: "none" }}
          >
            <p className="drop1">click to call</p>
            <hr />
            <p className="drop1">click to message</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
