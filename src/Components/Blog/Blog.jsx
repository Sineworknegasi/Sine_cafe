import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="Blog_section section-gap">
      <div className="container">
        <div className="Menu_content pb-60 text_center">
          <h1 className="text-center mb-10">
            What kind of Coffee we serve for you
          </h1>
          <p className="text-center">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <div className="Blog_content">
                    <img className=" img-fluid w-100" src="https://preview.colorlib.com/theme/coffee/img/b1.jpg.webp" alt="" />
                    <ul className="post_tag">
                        <li>Travel</li>
                        <li>Lifestyle</li>
                    </ul>
                    <h4>Portable latest Fashion for young women</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore.</p>
                    <p className="Blog_Date">31st January, 2018</p>
                </div>
            </div>
            <div className="col-md-6">
            <div className="Blog_content">
                    <img className=" img-fluid w-100" src="https://preview.colorlib.com/theme/coffee/img/b2.jpg.webp" alt="" />
                    <ul className="post_tag">
                        <li>Travel</li>
                        <li>Lifestyle</li>
                    </ul>
                    <h4>Portable latest Fashion for young women</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore.</p>
                    <p className="Blog_Date">31st January, 2018</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
