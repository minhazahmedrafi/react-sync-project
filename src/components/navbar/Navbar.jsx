import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import images from "../../images/AllExports";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const animateNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", animateNavbar);

  return (
    <>
      <nav
        className={
          navbar
            ? "navbar fixed-top navbar-expand-lg navbar-light navPadding"
            : "navbar fixed-top navbar-expand-lg navbar-light"
        }
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={images.Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#description"
                >
                  DESCRIPTION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  FEATURES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#screens">
                  SCREENS
                </a>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button">
                  EXTRA
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/article">
                      ARTICLE DETAILS
                    </Link>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <Link className="dropdown-item" to="/terms">
                      TERMS CONDITIONS
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/privacy">
                      PRIVACY POLICY
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to={"#"} className="btn">
              DOWNLOAD
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
