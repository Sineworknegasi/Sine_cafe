import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import "./Navbar.css";

const Navbar = () => {
  const [Toggle, ShowMenu] = useState(false);

  return (
    <header className="header py-3">
      <div className="header_contact container gap-5 text-end text-white"><p className="mb-0">Mon-Fri: 8am to 2pm</p> <p className="m-0">Sat-Sun: 11am to 4pm</p><p className="m-0">(012) 6985 236 7512</p></div>
      <nav className="nav container d-flex justify-content-between px-2">
        <a href="#Home" className="nav__logo text-decoration-none">
          Yene<span className="Cafe">Cafe.</span>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list list-unstyled m-0">
            <li className="nav__item ">
              <a
                href="#Home"
                className="nav__link active-link text-decoration-none"
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link text-decoration-none">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link text-decoration-none">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link text-decoration-none">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#Portfolio" className="nav__link text-decoration-none">
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#Contact" className="nav__link text-decoration-none">
                Contact
              </a>
            </li>
          </ul>
          <IoCloseSharp
            className="nav_close nav__icon"
            onClick={() => ShowMenu(!Toggle)}
          />
        </div>

        <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
          <TiThMenu className="fs-1 text-white" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
