import React from "react";
import { Link } from "react-router-dom";
import "./gohome.scss";

const GoHome = ({ homeContent }) => {
  return (
    <>
      <div className="goHome">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="homeNav">
                <p>
                  <Link to={"/"}>Home</Link>{" "}
                  <i className="fa fa-angle-double-right"></i> {homeContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoHome;
