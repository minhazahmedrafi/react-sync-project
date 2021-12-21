import React from "react";
import images from "../../images/AllExports";
import "./screens.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation, Autoplay } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
const Screens = () => {
  return (
    <>
      <div className="screens" id="screens">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Swiper
                autoplay={{
                  delay: 1500,
                }}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="singleScreen">
                    <img
                      className="img-fluid"
                      src={images.screenshot1}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="singleScreen">
                    <img
                      className="img-fluid"
                      src={images.screenshot2}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="singleScreen">
                    <img
                      className="img-fluid"
                      src={images.screenshot3}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="singleScreen">
                    <img
                      className="img-fluid"
                      src={images.screenshot4}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="singleScreen">
                    <img
                      className="img-fluid"
                      src={images.screenshot5}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="singleScreen">
                    <img
                      className="img-fluid"
                      src={images.screenshot6}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="singleScreen">
                    <img
                      className="img-fluid"
                      src={images.screenshot7}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="singleScreen">
                    <img
                      className="img-fluid"
                      src={images.screenshot8}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="singleScreen">
                    <img
                      className="img-fluid"
                      src={images.screenshot9}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="singleScreen">
                    <img
                      className="img-fluid"
                      src={images.screenshot10}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screens;
