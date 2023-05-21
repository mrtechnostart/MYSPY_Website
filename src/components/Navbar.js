import React, { useState } from "react";
import "./CSS/Navbar.css"

const Navbar = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setOffcanvasOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-lg-5">
      <div className="container-fluid d-flex">
        <a href="/" className="titletag">MYSPY</a>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={toggleOffcanvas}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        className={`offcanvas offcanvas-start ${offcanvasOpen ? "show" : ""}`}
        tabIndex="-1"
        id="sidebar"
        aria-labelledby="sidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={toggleOffcanvas}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" to="/" onClick={handleLinkClick}>
                Home
              </a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/features" onClick={handleLinkClick}>
                Features
              </a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/screenshot" onClick={handleLinkClick}>
                Screenshot
              </a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/download" onClick={handleLinkClick}>
                Downloads
              </a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/ProjectBlaze/maintainership/">
                Maintainership
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/ProjectBlaze/">
                Source
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/ProjectBlaze/official_devices/blob/12.1/changelog.md">
                Changelog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;