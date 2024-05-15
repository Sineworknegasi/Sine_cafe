import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import "./Review.css";
import CountUp from "react-countup";

const Review = () => {
  return (
    <section className="review_section section-gap">
      <div className="container">
        <div className="Menu_content pb-60 text_center text-white">
          <h1 className="text-center mb-10">
            What kind of Coffee we serve for you
          </h1>
          <p className="text-center text-white">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="row">
          <div className=" col-md-6">
            <div className="review_content">
              <img
                src="https://preview.colorlib.com/theme/coffee/img/r1.png.webp"
                alt=""
              />
              <div className="d-flex flex-row align-items-center gap-4 my-3 text-white">
                <h4 className="m-0 fs-5">loren ipsum</h4>
                <div className="stars d-flex flex-row">
                  <MdOutlineStar className="star_icon active" />
                  <MdOutlineStar className="star_icon active" />
                  <MdOutlineStar className="star_icon active" />
                  <MdOutlineStar className="star_icon" />
                  <MdOutlineStar className="star_icon" />
                </div>
              </div>
              <p className="text-white">
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker. Here you can
                find the best computer accessory for your laptop, monitor,
                printer, scanner, speaker.
              </p>
            </div>
          </div>
          <div className=" col-md-6">
            <div className="review_content">
              <img
                src="https://preview.colorlib.com/theme/coffee/img/r2.png.webp"
                alt=""
              />
              <div className="d-flex flex-row align-items-center gap-4 my-3 text-white">
                <h4 className="m-0 fs-5">loren ipsum</h4>
                <div className="stars d-flex flex-row ">
                  <MdOutlineStar className="star_icon active" />
                  <MdOutlineStar className="star_icon active" />
                  <MdOutlineStar className="star_icon" />
                  <MdOutlineStar className="star_icon" />
                  <MdOutlineStar className="star_icon" />
                </div>
              </div>
              <p className="text-white">
                Accessories Here you can find the best computer accessory for
                your laptop, monitor, printer, scanner, speaker. Here you can
                find the best computer accessory for your laptop, monitor,
                printer, scanner, speaker.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center pt-5">
          <div className="col-md-3 d-flex  align-items-center">
            <div>
              <CountUp
                className="count_numbers text-white fw-lighter"
                start={0}
                end={2536}
                duration={2}
              />
              <p className="fs-6 text-white text-center">Happy Client</p>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-center">
          <div>
              <CountUp
                className="  count_numbers text-white fw-lighter"
                start={0}
                end={7562}
                duration={2}
              />
              <p className="fs-6 text-white text-center">Total Projects</p>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-center">
          <div>
              <CountUp
                className=" count_numbers text-white fw-lighter"
                start={0}
                end={2013}
                duration={2}
              />
              <p className="fs-6 text-white text-center">Cups Coffee</p>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-center">
          <div>
              <CountUp
                className=" count_numbers text-white fw-lighter"
                start={0}
                end={10536}
                duration={2}
              />
              <p className="fs-6 text-white text-center">Total Submitted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
