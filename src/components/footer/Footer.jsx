import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="singleFooter">
                <h5 className="fHead">About Sync</h5>
                <span>
                  Sync is a landing page HTML template built with Bootstrap 4
                  for presenting mobile apps
                </span>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="singleFooter">
                <h5 className="fHead">Contact Info</h5>
                <div className="contactList">
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                    22 Innovation Street, CA, US
                  </span>
                  <a href="mailto:office@syncmobile.com">
                    <span>
                      <i className="fas fa-envelope"></i>
                      office@syncmobile.com
                    </span>
                  </a>
                  <a href="tel:+4437694523">
                    <span>
                      <i class="fas fa-phone"></i>
                      +44 376 945 23
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="singleFooter">
                <h5 className="fHead">Value Links</h5>
                <div className="valueLink">
                  <Link to="#">Terms & Conditions</Link>
                  <Link to="#">Privacy Policy</Link>
                  <Link to="#">Article Details</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="singleFooter">
                <h5 className="fHead">Other Apps</h5>
                <div className="valueLink">
                  <Link to="#">Scientific Calculator</Link>
                  <Link to="#">Advanced Timer</Link>
                  <Link to="#">Music Store</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="singleFooter">
                <div className="socials">
                  <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <a
            href="https://coderminhaz.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            coderminhaz
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
