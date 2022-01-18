import React from "react";
import "./healthcare.css";

export default function Healthcare() {
  return (
    <section className="healthcare">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="healthcare_img">
              <img src={require("../../img/healthcare.png")} />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="healthcare_section">
              <h2>Leading healthcare providers</h2>
              <hr></hr>
              <p>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </p>
              <button type="button" class="btn btn-link service-btn">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
