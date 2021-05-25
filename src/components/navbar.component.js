import React, { Component } from 'react';
import { Link, link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Exercise Tracker
        </Link>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div className="navbar-collapse" id="navbarNavDropdown">
          <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link active" href="#">
              Exercises
            </Link>
            <Link to="/create" class="nav-item nav-link" href="#">
              Create Exercise Log
            </Link>
            <Link to="/user" class="nav-item nav-link" href="#">
              Create User
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
