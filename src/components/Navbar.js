import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li> */}
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label "
              htmlFor="flexSwitchCheckDefault"
            >
              {props.btnModeText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//  PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype
// if the value passed as props and proptypes are of different datatype then it will show error

// is required is used to ensure whether the prop is passed or not
// if deafult props are applied then it will not show any kind of error
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// Specifies the default values for props:
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About Us",
};

export default Navbar;
