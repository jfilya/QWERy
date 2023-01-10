import "./Culture.scss";
import React from "react";
class Culture extends React.Component {
  render() {
    return (
      <section className="culture">
        <div className="container culture__container">
          <div className="culture__text element-appearance">
            <h3>
              <span></span>
              INDONESIAN CULTURE
            </h3>
            <h2>Our culture here is very friendly to people</h2>
            <p>
              known for his politeness, manners and gentleness. This becomes a
              characteristic when they mingle with other tribes and become basic
              traits that are passed down by their ancestors.
            </p>
            <a href="#" className="btn">
              read more
              <span>
                <svg
                  width="25"
                  height="16"
                  viewBox="0 0 25 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 -6.99382e-07L15.09 1.41L20.67 7L0.5 7L0.5 9L20.67 9L15.08 14.58L16.5 16L24.5 8L16.5 -6.99382e-07Z"
                    fill="#FBD784"
                  />
                </svg>
              </span>
            </a>
          </div>
          <img
            className="culture__image element-appearance-img"
            src="images/image-culture.jpg"
            alt=""
          />
        </div>
      </section>
    );
  }
}
export default Culture;
