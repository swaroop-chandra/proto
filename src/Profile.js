import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="header">
        <Link to="/database">
          <img src={window.location.origin + "/back arrow.svg"} alt="back" />
        </Link>
        <p className="p1">profile</p>
      </div>
      <div className="card1">
        <div className="row1">personal info</div>
        <div className="center">
          <img
            src={window.location.origin + "/profileimage.jpg"}
            alt="image"
            className="profile_image"
          />
        </div>
        <div className="row2">
          <div className="option_name">
            <h4>Name</h4>
            <input type="text" placeholder="rahul kumar" />
          </div>
          <div className="option_name">
            <h4>mobile</h4>
            <input type="text" placeholder="7878787815" />
          </div>
          <div className="option_name">
            <h4>state</h4>
            <input type="text" placeholder="karnataka" />
          </div>
          <div className="option_name">
            <h4>email</h4>
            <input type="text" placeholder="rahul420@gmail.com" />
          </div>
          <div className="option_name">
            <h4>city</h4>
            <input type="text" placeholder="bangalore" />
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="row1">basic info</div>
        <div className="row2">
          <div className="option1">
            <h4>gender</h4>
            <input
              type="radio"
              className="hidden radio-label"
              id="male"
              name="gender"
              checked
            />
            <label className="button_lable" htmlFor="male">
              male
            </label>
            <input
              type="radio"
              name="gender"
              className="hidden radio-label"
              id="female"
            />
            <label className="button_lable" htmlFor="female">
              female
            </label>
            <input
              type="radio"
              name="gender"
              className="hidden radio-label"
              id="others"
            />
            <label className="button_lable" htmlFor="others">
              others
            </label>
          </div>
          <div className="option1">
            <h4>do you have bike?</h4>
            <input
              type="radio"
              className="hidden radio-label"
              id="yes"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="yes">
              yes
            </label>
            <input
              type="radio"
              name="smartphone"
              className="hidden radio-label"
              id="no"
            />
            <label className="button_lable" htmlFor="no">
              no
            </label>
          </div>
          <div className="option1">
            <h4>date of birth</h4>
            <input type="date" />
          </div>
          <div className="option1">
            <h4>do you have driving licence?</h4>
            <input
              type="radio"
              className="hidden radio-label"
              id="yes"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="yes">
              yes
            </label>
            <input
              type="radio"
              name="smartphone"
              className="hidden radio-label"
              id="no"
            />
            <label className="button_lable" htmlFor="no">
              no
            </label>
          </div>
          <div className="option1">
            <h4>do you have smartphone?</h4>
            <input
              type="radio"
              className="hidden radio-label"
              id="yes"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="yes">
              yes
            </label>
            <input
              type="radio"
              name="smartphone"
              className="hidden radio-label"
              id="no"
            />
            <label className="button_lable" htmlFor="no">
              no
            </label>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="row1">education details</div>
        <div className="row2">
          <div className="option_name">
            <h4>highest qualification</h4>
            <input type="text" placeholder="intermediate" />
          </div>
          <div className="option1">
            <h4>work experience</h4>
            <input
              type="radio"
              className="hidden radio-label"
              id="0-1year"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="0-1year">
              0-1year
            </label>
            <input
              type="radio"
              className="hidden radio-label"
              id="1-3year"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="1-3year">
              1-3year
            </label>
            <input
              type="radio"
              className="hidden radio-label"
              id="3-5year"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="3-5year">
              3-5year
            </label>
            <input
              type="radio"
              className="hidden radio-label"
              id="5+year"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="5+year">
              5+year
            </label>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="row1">work experience</div>
        <div className="row2">
          <div className="option_name">
            <h4>designation</h4>
            <input type="text" placeholder="sales executive" />
          </div>
          <div className="option_name">
            <h4>company</h4>
            <input type="text" placeholder="lal pathlav pvt.ltd" />
          </div>
          <div className="option1">
            <h4>work experience</h4>
            <input
              type="radio"
              className="hidden radio-label"
              id="0-1year"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="0-1year">
              0-1year
            </label>
            <input
              type="radio"
              className="hidden radio-label"
              id="1-3year"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="1-3year">
              1-3year
            </label>
            <input
              type="radio"
              className="hidden radio-label"
              id="3-5year"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="3-5year">
              3-5year
            </label>
            <input
              type="radio"
              className="hidden radio-label"
              id="5+year"
              name="smartphone"
              checked
            />
            <label className="button_lable" htmlFor="5+year">
              5+year
            </label>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="row1">upi detail</div>
        <div className="row2">
          <div className="option_name">
            <h4>upi id</h4>
            <input type="text" placeholder="abcd787878@yml" />
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="row1">KYC documentation</div>
        <div className="row2">
          <div className="verify1">
            <h3 className="verf_name">
              <h4>AADAR front</h4>
              <p>verified</p>
            </h3>
            <div className="verf_card">
              <img
                src={window.location.origin + "/DesktopBackground.jpg"}
                alt="verf_image"
                height="120px"
              />
            </div>
          </div>
          <div className="verify1">
            <h3 className="verf_name">
              <h4>AADAR back</h4>
              <p>verified</p>
            </h3>
            <div className="verf_card">
              <img
                src={window.location.origin + "/DesktopBackground.jpg"}
                alt="verf_image"
                height="120px"
              />
            </div>
          </div>
          <div className="verify1">
            <h3 className="verf_name">
              <h4> PAN card </h4>
              <p>verified</p>
            </h3>
            <div className="verf_card">
              <img
                src={window.location.origin + "/DesktopBackground.jpg"}
                alt="verf_image"
                height="120px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card1">
        <div className="row1">KYC details</div>
        <div className="row2">
          <div className="option_name">
            <h4>aadar number</h4>
            <input type="text" placeholder="1234 1234 1234" />
          </div>{" "}
          <div className="option_name">
            <h4>father's name</h4>
            <input type="text" placeholder="ramesh prasad" />
          </div>{" "}
          <div className="option_name">
            <h4>pan number</h4>
            <input type="text" placeholder="asdfg.123123" />
          </div>{" "}
          <div className="option_name">
            <h4>address</h4>
            <input
              type="text"
              placeholder="tavarakeri main road,bangalore 560029"
            />
          </div>{" "}
          <div className="option_name">
            <h4>date of birth</h4>
            <input type="text" placeholder="26 jan 2000" />
          </div>{" "}
          <div className="option_name">
            <h4>signature</h4>
            <input type="text" placeholder="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
