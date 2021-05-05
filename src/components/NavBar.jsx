import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";
const NavBar = ({ currentTheme }) => {
  useEffect(() => {
    let lightSwitcher = $("input[type='checkbox']#checkbox");
    lightSwitcher.prop("checked", currentTheme == "dark" ? true : false);
    $(".navbar-toggler").on("click", function () {
      $(".navbar-collapse").toggle("show");
    });

    $(".theme-switch").on("click", () => {
      lightSwitcher.prop("checked", !lightSwitcher.prop("checked"));
    });
  }, []);
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-scroll">
        <div className="container-fluid">
          <div className="logo">
            <a href="index.html">
              <img
                src="assets/img/logo-dark.png"
                alt=""
                className="logo-dark"
              />
              <img
                src="assets/img/logo-white.png"
                alt=""
                className="logo-white"
              />
            </a>
          </div>

          <div className="navbar-right ml-auto">
            <div className="small-screen theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="slider round"></div>
              </label>
            </div>
            <div className="small-screen social-icones">
              <ul className="list-inline">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="small-screen search-icon">
              <i className="fas fa-search"></i>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse text-center navbar-collapse" id="main_nav">
            <ul className="navbar-nav ml-auto mr-auto">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/home"
                  data-toggle="dropdown"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/blogs"
                  data-toggle="dropdown"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/about"
                  data-toggle="dropdown"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="big-screen theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </label>
          </div>
          <div className="big-screen social-icones">
            <ul className="list-inline">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="big-screen search-icon">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
