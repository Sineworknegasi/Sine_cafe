import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram,  FaTiktok, FaGithub } from "react-icons/fa";
import { FaRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className='footer_section section-gap'>
        <div className="container">
            <div className="row ">
                <div className="col-md-5">
                    <h4>About us</h4>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    <p className="text-white">Copyright ©️2024 All rights reserved | Developed by Sinework</p>
                </div>
                <div className="col-md-4">
                    <h4>Newsletter</h4>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter email" />
                        <div className="input-group-append">
                            <button className=" right_btn_sub" type="button"><FaRightLong/></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <h4>Follow Us</h4>
                    <p className="text-white">Let's be Social</p>
                    <ul className='Footer_social '>
                        <li>
                            <FaFacebookF />
                        </li>
                        <li>
                            <FaInstagram />
                        </li>
                        <li>
                            <FaTiktok />
                        </li>
                        <li>
                            <FaGithub />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer