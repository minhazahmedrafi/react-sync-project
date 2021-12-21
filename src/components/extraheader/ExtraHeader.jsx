import React from "react";
import "./extraheader.scss";

const ExtraHeader = ({ exHead }) => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="artHead">
                <h1>{exHead}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ExtraHeader;
