import React from "react";
import "./footer.css";
import twitter from "../img/twitter.svg";
import facebook from "../img/facebook.svg";
import instragam from "../img/insta.svg";
import youtube from "../img/youtube.svg";
import medium from "../img/m.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__top">
          <div className="footer__top-column">
            <p className="footer__column-title">Lopper</p>
            <p className="footer__column-text">
              Eu augue ut lectus
              <br />
              arcu bibendum at.
            </p>
          </div>
          <div className="footer__top-column">
            <p className="footer__menu-title">menu</p>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer__top-column">
            <p className="footer__menu-title">services</p>
            <ul>
              <li>
                <a href="#">Lorem</a>
              </li>
              <li>
                <a href="#">Ipsum</a>
              </li>
              <li>
                <a href="#">Dolor</a>
              </li>
              <li>
                <a href="#">Sit Amet</a>
              </li>
            </ul>
          </div>
          <div className="footer__top-column">
            <p className="footer__menu-title">contact us</p>
            <a href="#" className="footer__email-phone">
              <img
                src="img/email.svg"
                alt="email.svg"
                width="12px"
                height="9px"
              />
              <p>contact@lop.com</p>
            </a>
            <a href="#" className="footer__email-phone">
              <img
                src="img/smallphone.svg"
                alt="smallphone.svg"
                width="9px"
                height="13.5px"
              />
              <p>856 - 693 - 456</p>
            </a>
          </div>
          <div className="footer__top-column">
            <p className="footer__menu-title">follow us</p>
            <div className="footer__links">
              <a href="http://twitter.com">
                <img src={twitter} alt="twitter.svg" />
              </a>
              <a href="http://facebook.com">
                <img src={facebook} alt="facebook.svg" />
              </a>
              <a href="http://instagram.com">
                <img src={instragam} alt="insta.svg" />
              </a>
              <a href="http://youtube.com">
                <img src={youtube} alt="youtube.svg" />
              </a>
              <a href="#">
                <img src={medium} alt="m.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2019 Lopper by mariuszdaniel. All right reserved.</p>
        </div>
      </div>
    </>
  );
}
