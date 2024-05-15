import React from "react";
import "./Gallary.css";

const Gallary = () => {
  return (
    <section className="Gallary_section section-gap">
      <div className="container">
        <div className="Menu_content pb-60 text_center">
          <h1 className="text-center mb-10">
            What kind of Coffee we serve for you
          </h1>
          <p className="text-center">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex flex-column gap-4">
            <a href="">
              <img
                className="w-100 img-fluid"
                src="https://preview.colorlib.com/theme/coffee/img/g1.jpg.webp"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-100 img-fluid"
                src="https://preview.colorlib.com/theme/coffee/img/g2.jpg.webp"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-8 gap-4">
          <a href="">
            <img
              className="w-100 img-fluid"
              src="https://preview.colorlib.com/theme/coffee/img/g3.jpg.webp"
              alt=""
            />
          </a>
          <div className="row mt-4 gap-2 gap-md-0">
            <div className="col-md-6">
              <a href="#">
                <img
                  className="w-100 img-fluid"
                  src="https://preview.colorlib.com/theme/coffee/img/g4.jpg.webp"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-6">
              <a href="#">
                <img
                  className="w-100 img-fluid"
                  src="https://preview.colorlib.com/theme/coffee/img/g5.jpg.webp"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
