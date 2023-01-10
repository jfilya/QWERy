import "./Header.scss";
import React from "react";

class Header extends React.Component {
  divStyle: { [key: string]: string };
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.divStyle = {
      backgroundImage: 'url("images/bg-header.jpg")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
  }
  render() {
    return (
      <header className="header" style={this.divStyle}>
        <div className="header__top">
          <div className="header__wrapper">
            <nav>
              <a href="#" className="header__logo">
                QWERy
              </a>
              <ul>
                <li>
                  <a href="#">Information</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Culture</a>
                </li>
              </ul>
              <div className="header__search">
                <img src="images/search.svg" alt="search" />
                <input type="search" placeholder="Search" />
              </div>
            </nav>
            <div className="header__title">
              <p>
                <span></span>explore the Nature Beauty
              </p>
              <h1>
                <span>Discover</span>
                <br /> Wonderful Indonesia
              </h1>
            </div>

            <a href="#" className="header__scroll-btn pulse">
              <span>Scroll down</span>
              <svg
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="header__bottom"></div>
      </header>
    );
  }
}

export default Header;
