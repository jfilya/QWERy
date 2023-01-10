import "./Tour.scss";
import React from "react";
class Tour extends React.Component {
  render() {
    return (
      <section className="tour">
        <div className="container tour__container" id="tour">
          <img className="tour__image element-appearance-img" src="images/image-tour.jpg" alt="" />
          <div className="tour__text element-appearance">
            <h3>
              <span></span>
              EAST nUSA TENGGARA
            </h3>
            <h2>Have you enjoyed your holiday?</h2>
            <p>
              You will be amazed if you take part in this sailing Komodo island
              tour package. So it is also mandatory for you, besides enjoying
              Komodo tourism on Komodo Island, you also have to taste the marine
              tourism. The beautiful waters of Komodo will make you meet many
              travelers from other countries.
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
        </div>
      </section>
    );
  }
}
export default Tour;
