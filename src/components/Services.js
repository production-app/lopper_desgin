import React from "react";
import "./services.css";

export default function Services() {
  return (
    <>
      <section className="services">
        <p className="what__we-do">we are amazing</p>
        <p className="big__title">Our services</p>
        <p className="subtitle">
          Quam adipiscing vitae proin sagittis nisl rhoncus mattis
          <br />
          rhoncus urna. Quam elementum pulvinar etiam non. Eu <br />
          consequat.
        </p>
        <div className="service__blocks">
          <div className="service__block block-1">
            <div className="service__block-icon" />
            <p className="service__block-title">Webdesign</p>
            <p className="service__block-text">
              Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in
              ante metus dictum. Amet aliquam id diam maecenas.
            </p>
          </div>
          <div className="service__block block-2">
            <div className="service__block-icon" />
            <p className="service__block-title">Webdev</p>
            <p className="service__block-text">
              Eget nulla facilisi etiam dignissim diam quis enim lobortis
              scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel
              pretium.
            </p>
          </div>
          <div className="service__block block-3">
            <div className="service__block-icon" />
            <p className="service__block-title">Marketing</p>
            <p className="service__block-text">
              Eu augue ut lectus arcu bibendum at. Pellentesque nec nam aliquam
              sem et tortor consequat.
            </p>
          </div>
          <div className="service__block block-4">
            <div className="service__block-icon" />
            <p className="service__block-title">Marketing</p>
            <p className="service__block-text">
              Id venenatis a condimentum vitae. Magna fermentum iaculis eu non
              diam phasellus vestibulum lorem. Tortor dignissim convallis aenean
              et.
            </p>
          </div>
          <div className="service__block block-5">
            <div className="service__block-icon" />
            <p className="service__block-title">Webdesign</p>
            <p className="service__block-text">
              Sollicitudin ac orci phasellus egestas tellus rutrum tellus
              pellentesque. Malesuada fames ac turpis egestas sed.
            </p>
          </div>
          <div className="service__block block-6">
            <div className="service__block-icon" />
            <p className="service__block-title">Webdev</p>
            <p className="service__block-text">
              Integer quis auctor elit sed vulputate mi. Semper auctor neque
              vitae tempus. Vulputate odio ut enim blandit volutpat maecenas
              volutpat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
