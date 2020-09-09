import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      {/* Header */}
      <section className="main section">
        <div className="wrapper">
          <header className="header">
            <div className="header__logo">
              <a href="#" className="header__logo-link">
                Lopper
              </a>
            </div>
            <div className="header__nav">
              <ul className="header__nav-list">
                <li>
                  <a href="#" className="header__nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="header__nav-link">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="header__nav-link">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="header__nav-link">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="header__tel">
              <a href="tel:+01666-693-456" className="header__tel-link">
                <i className="fas fa-mobile-alt fa-lg" /> (01) 666 693-456
              </a>
            </div>
            <div className="header__nav-btn">
              <span />
              <span />
              <span />
            </div>
          </header>
          <div className="main__suptitle section-suptitle">What we do?</div>
          <div className="main__title">
            We grow
            <br />
            <span>great business</span>
          </div>
          <div className="main__link">
            <div className="main__link-text">
              Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.
            </div>
            <div className="main__link-btn">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="main__scroll">
            <div className="main__scroll-text">Scroll to see more</div>
            <div className="main__scroll-btn">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
