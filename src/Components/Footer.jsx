import React from "react";
import "../Css/Footer.css";
import "../Css/StyleGlobal.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="flex-around list-redes flex-wrap">
        <li className="list-items">
          <a href="www.youtube.com" className="">
            <i className="fab fa-youtube"></i> Youtube
          </a>
        </li>
        <li className="">
          <a href="www.facebook.com" className="">
            <i className="fab fa-facebook-square"></i> Facebook
          </a>
        </li>
        <li className="">
          <a href="www.nose.com" className="">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
        <li className="">
          <a href="www.google.com" className="">
            <i className="fab fa-twitter"></i>Twitter
          </a>
        </li>
        <li className="">
          <a href="www.google.com" className="">
            <i className="fab fa-linkedin"></i>Linkedin
          </a>
        </li>
      </ul>
      <p className="desarrollador">
        <span className="color-red">Front End Developer</span> : Joel Ventura!
      </p>
    </footer>
  );
};

export default Footer;
