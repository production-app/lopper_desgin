import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <>
      <section className="intro section">
        <div className="wrapper">
          <div className="intro__content">
            <div className="intro__suptitle section-suptitle">Intro</div>
            <div className="intro__title section-title">Our future</div>
            <div className="intro__text">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </div>
            <div className="intro__text text">
              By the same illusion which lifts the horizon of the sea to the
              level of the spectator on a hillside, the sable cloud beneath was
              dished out, and the car seemed to float in the middle of an
              immense dark sphere, whose upper half was strewn with silver.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
