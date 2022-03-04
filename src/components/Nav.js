//import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../css/nav.css";
import { render } from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Route } from "react-router";

function Navbar() {
  return (
    <div className="main_banner sticky-top">
      <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
        <Link className="navbar-brand" to="/">
          Rebrandly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home <span className="sr-only"></span>
            </Link>

            <Link to="/pricing" className="nav-item nav-link">
              Pricing
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
