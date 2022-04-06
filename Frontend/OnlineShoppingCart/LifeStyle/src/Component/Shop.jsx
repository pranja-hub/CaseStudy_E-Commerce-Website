import React from "react";
import "./StyleSheet.css";
import { Link, useNavigate } from "react-router-dom";

const Shop = () => {
  const nav = useNavigate();
  const Logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      nav("/");
    }
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-inverse bg-dark navbar-dark">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-brand active">
                Lifestyle Store
              </div>
            {localStorage.getItem("jwt") && (
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <button
                    onClick={Logout}
                    style={{  cursor: "pointer",
                    backgroundColor: "floralwhite",
                    position: "absolute",
                    top: "14px",
                    right: "6em"}}
                    >
                    <span>
                    Logout
                  </span>
                  </button>
                </li>
              </ul>
            )}
          </div>
          </div>
        </nav>

        <div id="banner_image">
          <div className="container">
            <div className="banner_content">
              <Link to="/product">
              <button className="btn btn-danger btn-lg active"
              style={{
                marginTop: "3em",
                marginLeft: "15em"
              }}>
                Shop Now
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <center>
              <h>
                <b>Copyright &#169; Lifestyle Store. All Rights Reserved</b> and{" "}
                <b>Contact Us: +91 90000 00000</b>
              </h>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
