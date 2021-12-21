import React from "react";
import "./terms.scss";
import { Link, useNavigate } from "react-router-dom";
import ExtraHeader from "../../components/extraheader/ExtraHeader";
import GoHome from "../../components/gohome/GoHome";
import Navbar from "../../components/navbar/Navbar";

const Terms = () => {
  let history = useNavigate();
  return (
    <>
      <main className="terms" id="terms">
        <Navbar />
        <ExtraHeader exHead="Terms & Conditions" />
        <GoHome homeContent="Terms & Conditions" />
        <div className="libality">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="termsContent">
                  <div className="contentHead">
                    <h2>Limitations Of Liability</h2>
                  </div>
                  <p>
                    Sync also automatically collects and receives certain
                    information from your computer or mobile device, including
                    the activities you perform on our Website, the Platforms,
                    and the Applications, the type of hardware and software you
                    are using (for example, your operating system or browser),
                    and information obtained from cookies. For example, each
                    time you visit the Website or otherwise use the Services, we
                    automatically collect your IP address, browser and device
                    type, access times, the web page from which you came, the
                    regions from which you navigate the web page, and the web
                    page(s) you access.
                  </p>
                  <span>
                    When you first register for a Sync account, and when you use
                    the we collect some{" "}
                    <Link to={"#"}>Personal Information</Link> about you such
                    as:
                  </span>
                  <div className="termsList">
                    <ul>
                      <li className="repoList">
                        <i className="fas fa-square"></i>
                        <p>
                          The geographic area where you use your computer and
                          mobile devices should be the same with the one on the
                          receipt
                        </p>
                      </li>
                      <li className="repoList">
                        <i className="fas fa-square"></i>
                        <p>
                          Your full name, username, and email address and other
                          contact details must be provided using the dedicated
                          form
                        </p>
                      </li>
                      <li className="repoList">
                        <i className="fas fa-square"></i>
                        <p>
                          A unique Sync user ID (an alphanumeric string) which
                          is assigned to you upon registration and session
                        </p>
                      </li>
                      <li className="repoList">
                        <i className="fas fa-square"></i>
                        <p>
                          Other optional information as part of your account
                          profile are not required and you should not mention
                          them
                        </p>
                      </li>
                      <li className="repoList">
                        <i className="fas fa-square"></i>
                        <p>
                          Your IP Address and, when applicable, timestamp
                          related to your consent and confirmation of consent
                          are mandatory
                        </p>
                      </li>
                      <li className="repoList">
                        <i className="fas fa-square"></i>
                        <p>
                          Other information submitted by you or your
                          organizational representatives via various methods is
                          not taken into
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="condition">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="conditionContent">
                  <div className="contentHead">
                    <h2>Terms And Conditions</h2>
                  </div>
                  <p>
                    Under no circumstances shall Sync be liable for any direct,
                    indirect, special, incidental or consequential damages,
                    including, but not limited to, loss of data or profit,
                    arising out of the use, or the inability to use, the
                    materials on this site, even if Sync or an authorized
                    representative has been advised of the possibility of such
                    damages. If your use of materials from this site results in
                    the need for servicing, repair or correction of equipment or
                    data, you assume any costs thereof should only be provided
                    by the user of the application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="usage">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="usageContent">
                  <div className="contentHead">
                    <h2>License Types & Template Usage</h2>
                  </div>
                  <p>
                    All our templates inherit the GNU general public license
                    from HTML. All .PSD & CSS files are packaged separately and
                    are not licensed under the GPL 2.0. Instead, these files
                    inherit Sync Personal Use License. These files are given to
                    all Clients on a personal use basis. You may not offer them,
                    modified or unmodified, for redistribution or resale of any
                    kind. You can’t use one of our themes on a HTML domain. More
                    on HTML Vs CSS, you can read here. You can use our templates
                    do develop sites for your clients and also for a limited
                    amount.
                  </p>
                  <p>
                    Services help our customers promote their products and
                    services, marketing and advertising; engaging audiences;
                    scheduling and publishing messages; and analyze the results
                    are always measured better with a dedicated analytics tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="condition">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="conditionContent">
                  <div className="contentHead">
                    <h2>Designer Membership And How It Applies</h2>
                  </div>
                  <p>
                    By using any of the Services, or submitting or collecting
                    any Personal Information via the Services, you consent to
                    the collection, transfer, storage disclosure, and use of
                    your Personal Information in the manner set out in this
                    Privacy Policy. If you do not consent to the use of your
                    Personal Information in these ways, please stop using the
                    Services if you don't whish to customize the template for
                    your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="condition">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="conditionContent">
                  <div className="contentHead">
                    <h2>Assets Used In The Live Preview Content</h2>
                  </div>
                  <p>
                    Sync Landing Page uses tracking technology on the landing
                    page, in the Applications, and in the Platforms, including
                    mobile application identifiers and a unique Hootsuite user
                    ID to help us recognize you across different Services, to
                    monitor usage and web traffic routing for the Services, and
                    to customize and improve the Services. By visiting Sync or
                    using the Services you agree to the use of cookies in your
                    browser and HTML-based emails. Cookies are small text files
                    placed on your device when you visit a web site in order to
                    track use of the site and to improve your user experience.
                  </p>
                  <Link onClick={() => history.goBack()} to={"#"}>
                    BACK
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Terms;
