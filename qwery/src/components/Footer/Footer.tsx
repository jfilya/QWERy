import "./Footer.scss";
import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="container footer__container">
          <div className="footer__top info-top">
            <div className="footer__logo">QWERy</div>
            <div className="footer__started">
              <span className="footer__started_ready">Ready to explore?</span>
              <div className="footer__started_btn">
                <span>Get started</span>
              </div>
            </div>
          </div>
          <div className="footer__middle">
            <div className="footer__left element-appearance-img">
              <h4>Let's go on vacation, Make your day</h4>
              <form action="#">
                <input
                  type="text"
                  placeholder="Email address"
                  required
                  minLength={2}
                />
                <button type="submit">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1721 19.2831L15.4552 14L10.1721 8.71688L11.8026 7.08643L18.7162 14L11.8026 20.9136L10.1721 19.2831Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div className="footer__right link">
              <ul>
                <li>Services</li>
                <li>
                  <a href="#">Email Marketing</a>
                </li>
                <li>
                  <a href="#">Campaigns</a>
                </li>
                <li>
                  <a href="#">Branding</a>
                </li>
                <li>
                  <a href="#">Offline</a>
                </li>
              </ul>
              <ul>
                <li>About</li>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Benefits</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
              <ul>
                <li>Help</li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-link">
              <ul className="footer__bottom-privacy">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <ul className="footer__bottom-social">
                <li>
                  <a href="#">
                    <svg
                      width="14"
                      height="28"
                      viewBox="0 0 14 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4322 4.85708H13.7715V0.554326C13.3679 0.495693 11.9799 0.36377 10.3635 0.36377C6.99078 0.36377 4.68036 2.60422 4.68036 6.72205V10.5118H0.958496V15.3219H4.68036V27.4251H9.24354V15.323H12.8149L13.3818 10.5129H9.24247V7.19901C9.24354 5.80873 9.598 4.85708 11.4322 4.85708Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width="29"
                      height="26"
                      viewBox="0 0 29 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.875 3.61268C27.8186 4.10205 26.693 4.42643 25.5195 4.58393C26.7268 3.82268 27.6482 2.62643 28.0814 1.18455C26.9558 1.8933 25.713 2.39393 24.3886 2.6733C23.3198 1.47143 21.7965 0.727051 20.1348 0.727051C16.9106 0.727051 14.315 3.4908 14.315 6.87893C14.315 7.36643 14.3541 7.83518 14.45 8.28142C9.60846 8.03205 5.32444 5.58143 2.44653 1.8483C1.9441 2.76893 1.64938 3.82268 1.64938 4.95705C1.64938 7.08705 2.68799 8.97517 4.23613 10.0683C3.3005 10.0496 2.38262 9.76268 1.605 9.3108C1.605 9.32955 1.605 9.35393 1.605 9.3783C1.605 12.3671 3.62362 14.8496 6.27073 15.4214C5.7967 15.5583 5.28006 15.6239 4.74389 15.6239C4.37106 15.6239 3.99468 15.6014 3.64137 15.5189C4.39591 17.9545 6.53703 19.7452 9.08294 19.8033C7.10161 21.4402 4.58588 22.4264 1.86243 22.4264C1.38485 22.4264 0.926801 22.4039 0.46875 22.342C3.04839 24.0989 6.10562 25.102 9.40252 25.102C20.1188 25.102 25.9776 15.727 25.9776 7.6008C25.9776 7.32893 25.9687 7.06642 25.9563 6.8058C27.112 5.93955 28.0832 4.85768 28.875 3.61268Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width="29"
                      height="30"
                      viewBox="0 0 29 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.40039 0H20.0527C24.9546 0 28.9297 4.19812 28.9297 9.375V20.625C28.9297 25.8019 24.9546 30 20.0527 30H9.40039C4.49854 30 0.523438 25.8019 0.523438 20.625V9.375C0.523438 4.19812 4.49854 0 9.40039 0ZM20.0526 27.1875C23.4791 27.1875 26.2665 24.2437 26.2665 20.625V9.375C26.2665 5.75625 23.4791 2.8125 20.0526 2.8125H9.40027C5.97376 2.8125 3.1864 5.75625 3.1864 9.375V20.625C3.1864 24.2437 5.97376 27.1875 9.40027 27.1875H20.0526Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.625 15C7.625 10.8581 10.8047 7.5 14.7265 7.5C18.6483 7.5 21.828 10.8581 21.828 15C21.828 19.1419 18.6483 22.5 14.7265 22.5C10.8047 22.5 7.625 19.1419 7.625 15ZM10.2878 15C10.2878 17.5837 12.2798 19.6875 14.7263 19.6875C17.1728 19.6875 19.1648 17.5837 19.1648 15C19.1648 12.4144 17.1728 10.3125 14.7263 10.3125C12.2798 10.3125 10.2878 12.4144 10.2878 15Z"
                        fill="white"
                      />
                      <ellipse
                        cx="22.3604"
                        cy="6.93736"
                        rx="0.94635"
                        ry="0.999375"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <p>Copyright {new Date().getFullYear()} QWERy</p>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
