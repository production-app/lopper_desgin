import React from "react";
import "./subscribe.css";

export default function Subscribe() {
  return (
    <>
      <div className="newsletter">
        <p className="newsletter__title">Subscribe to our newsletter</p>
        <p className="newsletter_subtitle">
          Cras pulvinar mattis nunc sed blandit.
        </p>
        <form
          action="submit"
          method="post"
          name="subscribe"
          id="subscribe__form"
        >
          <input
            type="email"
            placeholder="ENTER EMAIL"
            form="subscribe__form"
            id="subscribe__input"
          />
          <span id="subscribe__text">subscribe</span>
          <button className="subscribe__button" role="button">
            <svg
              width={12}
              height={8}
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6036 4.35355C11.7988 4.15829 11.7988 3.84171 11.6036 3.64645L8.42157 0.464466C8.22631 0.269204
                   7.90973 0.269204 7.71447 0.464466C7.5192 0.659728 7.5192 0.976311 7.71447 1.17157L10.5429 4L7.71447
                    6.82843C7.5192 7.02369 7.5192 7.34027 7.71447 7.53553C7.90973 7.7308 8.22631 7.7308 8.42157 7.53553L11.6036
                     4.35355ZM0.75 4.5H11.25V3.5H0.75V4.5Z"
                fill="#F61067"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
