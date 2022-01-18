import React from "react";
import "./service.css";
import { data } from "./data";
// import image from '//'
//  src={image}
export default function Service() {
  return (
    <section class="service">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <h2>Our Service</h2>
          </div>
          <div class="col-12">
            <hr></hr>
          </div>
          <div class="col-12">
            <p>
              We provide to you the best choiches for you. Adjust it to your
              health needs and make sure your undergo treatment with our highly
              qualified doctors you can consult with us which type of service is
              suitable for your health
            </p>
          </div>
          {data.map((e) => (
            <div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
              <div className="card">
                <div className="card-img">
                  <img src={e.img} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.texts}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12">
            <button type="button" class="btn btn-link service-btn">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
