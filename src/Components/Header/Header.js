import React from "react";
import "./header.css";

export default function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="header_section">
              <h1>Virtual healthcare for you</h1>
              <p>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <button type="button" className="btn btn-primary header-btn">
                Consult today
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="header_img">
              <img src={require("../../img/header-img.png")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
