import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.png";

class NavBar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header ">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/rooms">Rooms</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus">Contact Us</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/profile/">Profile</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
