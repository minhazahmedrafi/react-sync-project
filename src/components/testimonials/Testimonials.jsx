import React from "react";
import images from "../../images/AllExports";
import "./testimonials.scss";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="testimonialHead ">
                <h2>User Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-lg-4">
              <div className="singleTest">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <hr className="testimonial-line" />
                </div>
                <div className="userText">
                  <p>
                    I love using Sync for my personal development needs. It
                    meets all my requirements and it actually helps a lot with
                    focusing skills.
                  </p>
                  <span>Rick Jones - Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleTest">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <hr className="testimonial-line" />
                </div>
                <div className="userText">
                  <p>
                    After trying out a large number of personal coaching apps I
                    decided to give Sync a try and what a wonderful surprise it
                    was.
                  </p>
                  <span>Lynda Marquez - Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleTest">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <hr className="testimonial-line" />
                </div>
                <div className="userText">
                  <p>
                    Never dreamed I could learn so fast how to focus on my
                    personal goals and improve my life to levels I never thought
                    possible.
                  </p>
                  <span>Jay Frisco - Marketer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="clientLogos">
                <img className="img-fluid" src={images.custLogo1} alt="" />
                <img className="img-fluid" src={images.custLogo2} alt="" />
                <img className="img-fluid" src={images.custLogo3} alt="" />
                <img className="img-fluid" src={images.custLogo4} alt="" />
                <img className="img-fluid" src={images.custLogo5} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="singleTest">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <hr className="testimonial-line" />
                </div>
                <div className="userText">
                  <p>
                    I got so much value from using Sync in my daily life for
                    which I am very grateful and would recommend it to everybody
                  </p>
                  <span>Frank Gibson - Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleTest">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <hr className="testimonial-line" />
                </div>
                <div className="userText">
                  <p>
                    If you have great goals but can't figure out a way to keep
                    focused then you should definitely give Sync a try and see
                    the results
                  </p>
                  <span>Rita Longmile - Designer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="singleTest">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <hr className="testimonial-line" />
                </div>
                <div className="userText">
                  <p>
                    I've been looking for a great organizer app for such a long
                    time but now I am really happy that I found Sync. It's beeen
                    working great
                  </p>
                  <span>Jones Smith - Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
