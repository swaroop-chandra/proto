import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${
            window.location.origin + "/DesktopBackground.jpg"
          })`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">welcome Back!</h1>
        </div>
      </header>
      <div className="row">
        <Link to="/dashboard">
          <div className="button12">
            <img
              src={window.location.origin + "/googlelogo.png"}
              alt="logo"
              className="image1"
            />
            <p className="p12">login with google</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
