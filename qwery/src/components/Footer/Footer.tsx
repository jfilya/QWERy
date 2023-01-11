import "./Footer.scss";
import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="container footer__container">
          <div className="footer__top">
            <div className="footer__logo">QWERy</div>
            <div className="footer__started">
              <span  className="footer__started_ready">Ready to explore?</span>
              <div className="footer__started_btn">
                <span>Get started</span>
                </div>
            </div>
          </div>
          <div className="footer_middle"></div>
          <div className="footer__bottom"></div>
        </div>
      </section>
    );
  }
}
export default Footer;
