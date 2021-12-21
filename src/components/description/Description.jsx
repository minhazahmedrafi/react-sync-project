import React from "react";
import "./description.scss";
import images from "../../images/AllExports";
import { Link } from "react-router-dom";

const Description = () => {
  return (
    <>
      <div className="description" id="description">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 respo ">
              <div className="descImage">
                <img className="img-fluid" src={images.desc1} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="descContent ms-lg-5">
                <h2>Organize Your Time And Start Getting Results</h2>
                <p>
                  Sync is the first mobile app on the market to harness the
                  power of social connections to help you stop procrastinating
                  and start getting things done. Give it a try and see the
                  changes right away
                </p>
                <p className="contentList">
                  <i className="fas fa-square"></i>
                  Analyse and evaluate your current status and productivity
                </p>
                <p className="contentList">
                  <i className="fas fa-square"></i>
                  Begin monitoring your day to day routine with Sync app
                </p>
                <p className="contentList">
                  <i className="fas fa-square"></i>
                  See the improved results in no more than a couple of weeks
                </p>
                <Link className="btn" to={"#"}>
                  LIGHTBOX
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-lg-5 mt-lg-5">
              <div className="desc2LeftContent me-lg-4 mb-5 mb-lg-0">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      <i className="far fa-clock"></i>
                      Schedule
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      <i className="fas fa-list"></i>
                      Tracking
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      <i className="far fa-calendar-alt"></i>
                      Organize
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <p className="tabHeader">
                      {" "}
                      <span>Schedule tasks</span> to keep track of their
                      completion. Sync provides multiple scheduling options
                      including alarms and reminders.
                    </p>
                    <div className="scheduleList">
                      <div className="linst1">
                        <i class="far fa-check-square"></i>
                        <p>
                          You can always add new tasks or change the settings of
                          existing ones in your calendar view or the app control
                          panel
                        </p>
                      </div>
                      <div className="linst1">
                        <i class="far fa-check-square"></i>
                        <p>
                          It's easy to stay focused on your most important daily
                          activities that will get you closer to meeting your
                          goals
                        </p>
                      </div>
                      <div className="linst1">
                        <i class="far fa-check-square"></i>
                        <p>
                          Use phone reminders to free up your long term memory
                          which will reduce stress and make you more productive
                        </p>
                      </div>
                      <div className="scheduleButtons">
                        <Link className="btn terms" to={"#"}>
                          TERMS
                        </Link>
                        <Link className="btn privacy" to={"#"}>
                          PRIVACY
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="termsList">
                      <p>
                        <span>Keep track of everything</span> and analyse your
                        progress while using the app. In less than a month you
                        should be seeing improved results when it comes to time
                        management and task prioritization
                      </p>
                    </div>
                    <div className="termsList">
                      <p>
                        <span>Anyone can enjoy the app</span> no matter their
                        gender, age, occupation or location in the world. Sync's
                        algorithms have been built to be flexible and functional
                        for any person in the world
                      </p>
                    </div>
                    <div className="termsList">
                      <p>
                        <span>Achieve the impossible</span> just by carefully
                        monitoring your progress and keeping the app updated
                        with daily operations. It's easier than you think and it
                        only takes a couple of minutes
                      </p>
                    </div>
                    <div className="termsBtn">
                      <Link className="termLink" to={"#"}>
                        Terms & Conditions {">>"}
                      </Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <p className="tabHeader">
                      {" "}
                      <span>Use the power of social interactivity </span> to
                      keep you motivated and focused on your daily and long term
                      goals. It's revolutionary
                    </p>
                    <div className="scheduleList">
                      <div className="linst1">
                        <i class="far fa-check-square"></i>
                        <p>
                          Commiting to something in front of a crowd gives you
                          little room to walk back on your promise and makes you
                          push on
                        </p>
                      </div>
                      <div className="linst1">
                        <i class="far fa-check-square"></i>
                        <p>
                          No more frustrations of loosing focus and not being
                          efficient. Sync main purpose is to solve just that and
                          make you happy
                        </p>
                      </div>
                      <div className="linst1">
                        <i class="far fa-check-square"></i>
                        <p>
                          It's the first mobile app that can turn you in a
                          better organized person without the pressure of
                          failing like other systems
                        </p>
                      </div>
                      <div className="linst1">
                        <i class="far fa-check-square"></i>
                        <p>
                          Recognized by a lot of trainers and life coaches Sync
                          is the number one tool they recommend time management
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 respo">
              <div className="desc2Img ms-lg-5">
                <img className="img-fluid" src={images.desc2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
