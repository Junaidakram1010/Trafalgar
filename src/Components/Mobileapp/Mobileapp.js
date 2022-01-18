import React from "react";
import "./mobileapp.css";
import arrow from "../../img/arrow.png";

export default function Mobileapp() {
  return (
    <section className="mobileapp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="mobileapp_section">
              <h2>Download our mobile apps</h2>
              <hr></hr>
              <p>
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
              </p>
              <button type="button" class="btn btn-link mobile-btn">
                Download
                <img src={arrow} />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="mobileapp_img">
              <img src={require("../../img/mobileapp.png")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
