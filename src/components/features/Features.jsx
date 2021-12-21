import React from "react";
import images from "../../images/AllExports";
import "./features.scss";

const Features = () => {
  return (
    <>
      <div className="features" id="features">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="featuresHead text-center">
                <h2>Special Features</h2>
                <p>
                  Sync's features are designed to help you improve your time
                  management skills and become a better organized person.
                  Organize your tasks, schedule your appointments and meet your
                  personal development goals with Sync
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-3">
            <div className="col-lg-4">
              <div className="leftFeaturesContent">
                <div className="singleFeature respo">
                  <div className="featureText text-end">
                    <h4>Goal Setting</h4>
                    <p>
                      Like any self improving process, everything starts with
                      setting your goals and committing to them
                    </p>
                  </div>
                  <div className="featureIcon text-end">
                    <i className="fas fa-users fUser"></i>
                  </div>
                </div>
                <div className="singleFeature respo">
                  <div className="featureText text-end">
                    <h4>Situation Analysis</h4>
                    <p>
                      Sync provides a well designed and ergonomic visual editor
                      for you to edit your quick notes
                    </p>
                  </div>
                  <div className="featureIcon text-end">
                    <i className="fas fa-code fCode"></i>
                  </div>
                </div>
                <div className="singleFeature respo">
                  <div className="featureText text-end">
                    <h4>Tasks Settings</h4>
                    <p>
                      Each option packaged in the app's menus is provided in
                      order to improve you personally
                    </p>
                  </div>
                  <div className="featureIcon text-end">
                    <i className="fas fa-cog fCog"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="featuresCenterImg">
                <img className="img-fluid" src={images.featuresApp} alt="" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="leftFeaturesContent rightFeaturesContent">
                <div className="singleFeature">
                  <div className="featureIcon">
                    <i className="fas fa-comments fComment"></i>
                  </div>
                  <div className="featureText">
                    <h4>Social Interaction</h4>
                    <p>
                      Schedule your appointments, meetings and periodical
                      evaluations using the tools
                    </p>
                  </div>
                </div>
                <div className="singleFeature">
                  <div className="featureIcon">
                    <i className="fas fa-rocket fRocket"></i>
                  </div>
                  <div className="featureText">
                    <h4>Get Things Done</h4>
                    <p>
                      Reading focus mode for long form articles, ebooks and
                      other materials with long text
                    </p>
                  </div>
                </div>
                <div className="singleFeature">
                  <div className="featureIcon">
                    <i className="fas fa-download fDownload"></i>
                  </div>
                  <div className="featureText">
                    <h4>Good Foundation</h4>
                    <p>
                      Get a solid foundation for your self development efforts.
                      Try Sync mobile app for devices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
