import React from "react";
import { Link } from "react-router-dom";
import ExtraHeader from "../../components/extraheader/ExtraHeader";
import Footer from "../../components/footer/Footer";
import GoHome from "../../components/gohome/GoHome";
import Navbar from "../../components/navbar/Navbar";
import "./privacy.scss";

const Privacy = () => {
  return (
    <>
      <div className="privacy" id="privacy">
        <Navbar />
        <ExtraHeader exHead="Privacy Policy" />
        <GoHome homeContent="Privacy Policy" />
        <div className="businessReport">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="reportContent">
                  <div className="contentHead">
                    <h2>Business Analysis And Reporting Tools</h2>
                  </div>
                  <div className="reportDetails">
                    <p>
                      Sync also automatically collects and receives certain
                      information from your computer or mobile device, including
                      the activities you perform on our Website, the Platforms,
                      and the Applications, the type of hardware and software
                      you are using (for example, your operating system or
                      browser), and information obtained from cookies. For
                      example, each time you visit the Website or otherwise use
                      the Services, we automatically collect your IP address,
                      browser and device type, access times, the web page from
                      which you came, the regions from which you navigate the
                      web page, and the web page(s) you access (as applicable).
                    </p>
                    <span>
                      When you first register for a Sync account, and when you
                      use the Services, we collect some
                      <Link to="#"> Personal Information </Link>
                      about you such as:
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="leftReportList">
                  <ul>
                    <li className="repoList">
                      <i className="fas fa-square"></i>
                      <p>
                        The geographic area where you use your computer and
                        mobile devices should be the same with the one of your
                      </p>
                    </li>
                    <li className="repoList">
                      <i className="fas fa-square"></i>
                      <p>
                        Your full name, username, and email address and other
                        contact details should be provided in the contact forms
                      </p>
                    </li>
                    <li className="repoList">
                      <i className="fas fa-square"></i>
                      <p>
                        A unique Sync user ID (an alphanumeric string) which is
                        assigned to you upon registration should always be at
                        front
                      </p>
                    </li>
                    <li className="repoList">
                      <i className="fas fa-square"></i>
                      <p>
                        Every system is backuped regularly and it will not fail
                      </p>
                    </li>
                    <li className="repoList">
                      <i className="fas fa-square"></i>
                      <p>
                        Your IP Address and, when applicable, timestamp related
                        to your consent and confirmation of consent but please
                        make
                      </p>
                    </li>
                    <li className="repoList">
                      <i className="fas fa-square"></i>
                      <p>
                        Other information submitted by you or your
                        organizational representatives via various methods and
                        practiced techniques
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="leftReportList">
                  <ul>
                    <li className="repoList">
                      <i className="fas fa-square"></i>
                      <p>
                        Your billing address and any necessary other information
                        to complete any financial transaction, and when making
                        purchases through the Services, we may also collect your
                        credit card or PayPal information or any other sensitive
                      </p>
                    </li>
                    <li className="repoList">
                      <i className="fas fa-square"></i>
                      <p>
                        User generated content (such as messages, posts,
                        comments, pages, profiles, images, feeds or
                        communications exchanged on the Supported Platforms that
                        can be used)
                      </p>
                    </li>
                    <li className="repoList">
                      <i className="fas fa-square"></i>
                      <p>
                        Images or other files that you may publish via our
                        Services front
                      </p>
                    </li>
                    <li className="repoList">
                      <i className="fas fa-square"></i>
                      <p>
                        Information (such as messages, posts, comments, pages,
                        profiles, images) we may receive relating to
                        communications you send us, such as queries or comments
                        concerning
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pageData">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="dataContent">
                  <div className="contentHead">
                    <h2>Business Analysis And Reporting Tools</h2>
                  </div>
                  <div className="innerContent">
                    <p>
                      Sync Landing Page Template uses visitors' data for the
                      following general purposes and for other specific ones
                      that are important:
                    </p>
                    <ul>
                      <li>
                        <p>
                          To identify you when you login to your account so we
                          can start or user security process for the entire
                          session and duration
                        </p>
                      </li>
                      <li>
                        <p>
                          To enable us to operate the Services and provide them
                          to you without fear of losing precious confidential
                          information of your users
                        </p>
                      </li>
                      <li>
                        <p>
                          To verify your transactions and for purchase
                          confirmation, billing, security, and authentication
                          (including security tokens for communication with
                          installed). Always take security measures like not
                          saving passwords in your browser or writing them down
                        </p>
                      </li>
                      <li>
                        <p>
                          To analyze the Website or the other Services and
                          information about our visitors and users, including
                          research into our user demographics and user behaviour
                          in order to improve our content and Services
                        </p>
                      </li>
                      <li>
                        <p>
                          To contact you about your account and provide customer
                          service support, including responding to your comments
                          and questions
                        </p>
                      </li>
                      <li>
                        <p>
                          To share aggregate (non-identifiable) statistics about
                          users of the Services to prospective advertisers and
                          partners
                        </p>
                      </li>
                      <li>
                        <p>
                          To keep you informed about the Services, features,
                          surveys, newsletters, offers, surveys, newsletters,
                          offers, contests and events we think you may find
                          useful or which you have requested from us
                        </p>
                      </li>
                      <li>
                        <p>
                          To sell or market Sync Landing Page products and
                          services to you or in other parts of the world where
                          legislation is less restrictive
                        </p>
                      </li>
                      <li>
                        <p>
                          To better understand your needs and the needs of users
                          in the aggregate, diagnose problems, analyze trends,
                          improve the features and usability of the Services,
                          and better understand and market to our customers and
                          users
                        </p>
                      </li>
                      <li>
                        <p>
                          To keep the Services safe and secure for everyone
                          using the app from administrators to regular users
                          with limited rights
                        </p>
                      </li>
                      <li>
                        <p>
                          We also use non-identifiable information gathered for
                          statistical purposes to keep track of the number of
                          visits to the Services with a view to introducing
                          improvements and improving usability of the Services.
                          We may share this type of statistical data so that our
                          partners also understand how often people use the
                          Services, so that they, too, may provide you with an
                          optimal experience.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customers">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="customerContent">
                  <div className="contentHead">
                    <h2>Customer Content We Process For Customers</h2>
                  </div>
                  <p>
                    Sync is a HTML landing page template tool. By its nature,
                    Services enable our customers to promote their products and
                    services integrate with hundreds of business applications
                    that they already use, all in one place. Customer security
                    is our primary focus in this document.
                  </p>
                  <p>
                    Services help our customers promote their products and
                    services, marketing and advertising; engaging audiences;
                    scheduling and publishing messages; and analyze the results
                    and improve the security levels in all areas of the
                    application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landingPage">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="landingpageContent">
                  <div className="contentHead">
                    <h2>Consent Of Using Sync Landing Page</h2>
                  </div>
                  <p>
                    By using any of the Services, or submitting or collecting
                    any Personal Information via the Services, you consent to
                    the collection, transfer, storage disclosure, and use of
                    your Personal Information in the manner set out in this
                    Privacy Policy. If you do not consent to the use of your
                    Personal Information in these ways, please stop using the
                    Services should be safe and easy to guarantee a great user
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inquire">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="inquireLeft">
                  <div className="contentHead">
                    <h2>Inquire What Data We Have</h2>
                  </div>
                  <p>
                    Sync Landing Page uses tracking technology on the landing
                    page, in the Applications, and in the Platforms, including
                    mobile application identifiers and a unique Sync user ID to
                    help us. Recognize you across different Services, to monitor
                    usage and web traffic routing for the Services, and to
                    customize the well known Services.
                  </p>
                  <p>
                    By visiting Sync or using the Services you agree to the use
                    of cookies in your browser and HTML-based emails. The
                    Services you consent and use of your basic and confidential{" "}
                    <Link to={"#"}>Personal Information</Link>{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inquireRight">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter name"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        Please fill out this field.
                      </small>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        Please fill out this field.
                      </small>
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Select option</option>
                        <option>Delete my data</option>
                        <option>Show me my data</option>
                      </select>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        I have read and agree to Sync's Privacy Policy and Terms
                        Conditions
                      </label>
                    </div>
                    <small id="emailHelp" className="form-text text-muted">
                      Please check this box if you want to proceed.
                    </small>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <Link className="inquireRBtn" to={"#"}>
              BACK
            </Link>
          </div>
        </div>
        <GoHome homeContent="Privacy Policy" />
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
