import React from "react";
import "./testimonal.css";
import commas from "../img/commas.svg";
import kerry from "../img/Ellipse.png";

export default function Testimonals() {
  return (
    <>
      <div className="testimonials">
        <div
          id="carouselControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel__item-inner">
                <div className="carousel__photo">
                  <img
                    className="central__photo"
                    src={kerry}
                    alt="Kerry Jones"
                  />
                  <img className="commas" src={commas} alt="commas.svg" />
                </div>
                <div className="smallface-1" />
                <div className="smallface-2" />
                <div className="smallface-3" />
                <div className="smallface-4" />
                <div className="smallface-5" />
                <div className="smallface-6" />
                <div className="smallface-7" />
                <p className="carousel__item-text">
                  Lectus arcu bibendum at varius. Adipiscing
                  <br />
                  diam donec adipiscing tristique.
                </p>
                <p className="carousel__item-signature">
                  Kerry Jones
                  <span className="carousel__item-company">
                    {" "}
                    - Some Company
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
