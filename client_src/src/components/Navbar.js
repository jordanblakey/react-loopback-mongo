import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a className="brand-logo center" href="/">
              Meetupz
            </a>
            <a
              className="button-collapse show-on-large"
              data-activates="main-menu"
            >
              <i className="fa fa-bars" />
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users" /> Meetups
                </Link>
              </li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li>
                <Link to="/">
                  <i className="fa fa-users" /> Meetups
                </Link>
              </li>
              <li>
                <Link to="/meetups/add">
                  <i className="fa fa-plus" /> Add Meetup
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-question-circle" /> About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
