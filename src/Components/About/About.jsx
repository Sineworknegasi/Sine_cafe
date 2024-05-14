import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import "./About.css";

const About = () => {
  return (
    <section className="About_section my-5">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center gap-2 gap-md-0">
          <div className="col-md-6">
            <div className="About_video">
              <div className="overlay overlay_bg">
                <a href="" className="Playbtn">
                  <IoPlayCircleOutline className="About_video_icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 video-left">
            <div className="About_content px-2">
              <h6 className="text_brown fw-normal">
                LIVE COFFEE MAKING PROCESS
              </h6>
              <h1 className=" fw-semibold pb-2">
                We Telecast our <br />Coffee Making Live
              </h1>
              <p className="fs-6 text-black">We are here to listen from you deliver exellence</p>
              <p className="fs-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
              <img className="img-fluid" src="https://preview.colorlib.com/theme/coffee/img/signature.png.webp" alt="signature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
