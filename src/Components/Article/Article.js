import React from "react";
import "./article.css";
import side from "../../img/side.png";
import art1 from "../../img/art1.png";
import art2 from "../../img/art2.png";
import art3 from "../../img/art3.png";

export default function Article() {
  return (
    <section className="article">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Check out our latest article</h2>
            <hr></hr>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <img src={art1} />
              <div className="card-body">
                <h3>Disease detection, check up in the laboratory</h3>
                <p>
                  In this case, the role of the health laboratory is very
                  important to do a disease detection...
                </p>
                <button type="button" class="btn btn-link article-btn">
                  Read more
                  <img src={side} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <img src={art2} />
              <div className="card-body">
                <h3>Herbal medicines that are safe for consumption</h3>
                <p>
                  Herbal medicine is very widely used at this time because of
                  its very good for your health...
                </p>
                <button type="button" class="btn btn-link article-btn">
                  Read more
                  <img src={side} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-md-auto col-12">
            <div className="card">
              <img src={art3} />
              <div className="card-body">
                <h3>Natural care for healthy facial skin</h3>
                <p>
                  A healthy lifestyle should start from now and also for your
                  skin health. There are some...
                </p>
                <button type="button" class="btn btn-link article-btn">
                  Read more
                  <img src={side} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button type="button" class="btn btn-link article-btn-link">
              View all
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
