import React from "react";
import "./article.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import images from "../../images/AllExports";
import Footer from "../../components/footer/Footer";
import GoHome from "../../components/gohome/GoHome";
import ExtraHeader from "../../components/extraheader/ExtraHeader";

const Article = () => {
  let history = useNavigate();
  return (
    <>
      <main className="article" id="article">
        <Navbar />
        <ExtraHeader exHead="Longer Article Title Should Definitely Go Here" />
        <GoHome homeContent="Longer Article Title Should Definitely Go Here" />
        <div className="artcleLgImg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="artileInnerImg">
                  <img className="img-fluid" src={images.articleLg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="improveProduct">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="improveLeft">
                  <div className="contentHead">
                    <h2>Improving Product Strategy</h2>
                  </div>
                  <div className="improveText">
                    <p>
                      Sync also automatically collects and receives certain
                      information from your computer or mobile device, including
                      the activities you perform on our Website, the Platforms,
                      and the Applications, the type of hardware and software
                      you are using (for example, your operating system or
                      browser), and information obtained.
                    </p>
                    <p>
                      For example, each time you visit the Website or otherwise
                      use the Services, we automatically collect your IP
                      address, browser and device type, access times, the web
                      page.
                    </p>
                    <p>
                      The best way to promoted digital products is to provide
                      potential users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="proveImg">
                  <img className="img-fluid" src={images.articleSm} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutTemplate">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="aboutContent">
                  <p>
                    Sync is a HTML landing page template tool. By its nature,
                    Services enable our customers to promote their products and
                    services integrate with hundreds of business applications
                    that they already use, all in one place. Services help our
                    customers promote their products and services, marketing and
                    advertising; engaging audiences; scheduling and publishing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="predction">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="contentHead">
                  <h2>Project Evaluation And Predictions</h2>
                </div>
                <div className="predctionContent">
                  <p>
                    By using any of the Services, or submitting or collecting
                    any Personal Information via the Services, you consent to
                    the collection, transfer, storage disclosure, and use of
                    your Personal Information in the manner set out in this
                    Privacy Policy. If you do not consent to the use of your
                    Personal Information in these ways, please stop using the
                    Services. Information in the manner set out in this Privacy
                    Policy. If you do not consent to the use of your Personal
                    Information in these ways, please stop using the Services.
                  </p>
                  <Link onClick={() => history.goBack()} to={"#"}>
                    BACK
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GoHome homeContent="Longer Article Title Should Go Here" />
        <Footer />
      </main>
    </>
  );
};

export default Article;
