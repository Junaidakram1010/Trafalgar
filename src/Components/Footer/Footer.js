import React from "react";
import "./footer.css";
import logow from "../../img/logow.png";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="footer-section">
              <ul>
                <li className="footer-logo">
                  <img src={logow} />
                </li>
                <li className="footer-para">
                  <p>
                    Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                  </p>
                </li>
                <li>
                  <span>© LTD 2020. All rights reserved</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="footer-list">
              <ul>
                <li className="dark">Company</li>
                <li>About </li>
                <li>Testimonials </li>
                <li>Find a doctor </li>
                <li>Apps </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="footer-list">
              <ul>
                <li className="dark">Region</li>
                <li>Indonaesia</li>
                <li>Singapore</li>
                <li>Hongkong </li>
                <li>Canada</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="footer-list">
              <ul>
                <li className="dark">Help</li>
                <li>Help center</li>
                <li>Contact support</li>
                <li>Instructions</li>
                <li>How it works</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
