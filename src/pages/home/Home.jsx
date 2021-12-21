import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import images from "../../images/AllExports";
import Description from "../../components/description/Description";
import Features from "../../components/features/Features";
import Screens from "../../components/screens/Screens";
import Testimonials from "../../components/testimonials/Testimonials";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <main id="home" className="home">
        <Navbar />
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1>Mobile App Landing Page</h1>
                  <p className="p-heading">
                    Start focusing on your goals and get more things done with
                    Sync mobile application. It's the first app to harness the
                    power of social connections to help you stay focused and get
                    organized
                  </p>
                  <a className="btn-solid-lg" href="#your-link">
                    <i className="fab fa-apple"></i>DOWNLOAD
                  </a>
                  <a className="btn-solid-lg" href="#your-link">
                    <i className="fab fa-google-play"></i>DOWNLOAD
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src={images.headeriphone}
                    alt="alternative"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="deco-white-circle-1">
            <img src={images.decorativeWhite} alt="alternative" />
          </div>
          <div className="deco-white-circle-2">
            <img src={images.decorativeWhite} alt="alternative" />
          </div>
          <div className="deco-blue-circle">
            <img src={images.decorativeBlue} alt="alternative" />
          </div>
          <div className="deco-yellow-circle">
            <img src={images.decorativeYellow} alt="alternative" />
          </div>
          <div className="deco-green-diamond">
            <img src={images.decorativeGreen} alt="alternative" />
          </div>
        </header>
        {/* Features */}
        <div className="features py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="allFeatures">
                  <div className="singleFeature">
                    <div className="featureImg">
                      <i class="fas fa-users"></i>
                    </div>
                    <div className="featureTitle">
                      <h5>Identify Goals</h5>
                    </div>
                  </div>
                  <div className="singleFeature">
                    <div className="featureImg codeImg">
                      <i class="fas fa-code"></i>
                    </div>
                    <div className="featureTitle">
                      <h5>Situation Analysis</h5>
                    </div>
                  </div>
                  <div className="singleFeature">
                    <div className="featureImg cogImg">
                      <i class="fas fa-cog"></i>
                    </div>
                    <div className="featureTitle">
                      <h5>Tasks Settings</h5>
                    </div>
                  </div>
                  <div className="singleFeature">
                    <div className="featureImg socialImg">
                      <i class="fas fa-comments"></i>
                    </div>
                    <div className="featureTitle">
                      <h5>Social Interaction</h5>
                    </div>
                  </div>
                  <div className="singleFeature">
                    <div className="featureImg doneImg">
                      <i class="fas fa-rocket"></i>
                    </div>
                    <div className="featureTitle">
                      <h5>Get Things Done</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Description />
        <Features />
        <Screens />
        <Testimonials />
        {/* project count */}
        <div className="projectCount">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="projectInfo">
                  <div className="singleInfo">
                    <i className="fas fa-users"></i>
                    <h2>231</h2>
                    <p>Happy User</p>
                  </div>
                  <div className="singleInfo">
                    <i className="fas fa-code codeImg"></i>
                    <h2>385</h2>
                    <p>Issues Solved</p>
                  </div>
                  <div className="singleInfo">
                    <i className="fas fa-cog cogImg"></i>
                    <h2>159</h2>
                    <p>Good Reviews</p>
                  </div>
                  <div className="singleInfo">
                    <i className="fas fa-comments socialImg"></i>
                    <h2>127</h2>
                    <p>Case Studies</p>
                  </div>
                  <div className="singleInfo">
                    <i className="fas fa-rocket doneImg"></i>
                    <h2>211</h2>
                    <p>Orders Received</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom download Area */}
        <div className="bottomDownload">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="downloadImg">
                  <img
                    className="img-fluid"
                    src={images.downloadIphone}
                    alt=""
                  />
                </div>
                <div className="decoImage">
                  <div class="deco-white-circle-1">
                    <img src={images.decorativeWhite} alt="alternative" />
                  </div>
                  <div class="deco-white-circle-2">
                    <img src={images.decorativeWhite} alt="alternative" />
                  </div>
                  <div class="deco-blue-circle">
                    <img src={images.decorativeBlue} alt="alternative" />
                  </div>
                  <div class="deco-yellow-circle">
                    <img src={images.decorativeYellow} alt="alternative" />
                  </div>
                  <div class="deco-green-diamond">
                    <img src={images.decorativeGreen} alt="alternative" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="donwloadContent">
                  <p>
                    Do you feel like you're wasting time with small stuff
                    instead of working towards your goals? Start using Sync to
                    organize your time and get a grip on your personal
                    development
                  </p>
                  <div className="bottomBtns">
                    <a className="btn" href="#your-link">
                      <i className="fab fa-apple"></i>DOWNLOAD
                    </a>
                    <a className="btn" href="#your-link">
                      <i className="fab fa-google-play"></i>DOWNLOAD
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
