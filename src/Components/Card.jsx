import React from "react";

const Card = () => {
  return (
    <>
      {/* <div className="card" style={{ width: "30%", height: "20%" }}>
        <img
          src="https://im.indiatimes.in/facebook/2019/Jul/ms_dhoni_himself_has_not_spoken_on_his_retirement_plans_1563350842.jpg"
          class="card-img-top"
          alt="image"
        />
        <div className="card-body">
          <h5 className="card-title">MS Dhoni</h5>
          <p className="card-text">MS Dhoni Always our favorite captain.</p>
          <a
            href="https://www.bing.com/images/search?q=ms+dhoni&form=HDRSC3&first=1"
            className="btn btn-primary"
          >
            Go to link
          </a>
        </div>
      </div> */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-80">
            <img
              src="https://media.gqindia.com/wp-content/uploads/2018/05/26-866x956.jpg"
              className="card-img-top"
              alt="image"
              style={{ height: "15rem", objectFit: "fill" }}
            />
            {/* <i class="material-icons">cloud</i> */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                1. MS Dhoni's new vintage look sets social media on fire, check it
                out here.
              </p>
            </div>
            <div className="card-footer" style={{backgroundColor:'lightgray'}}>
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-80">
            <img
              src="https://media.gqindia.com/wp-content/uploads/2018/05/26-866x956.jpg"
              className="card-img-top"
              alt="image"
              style={{  height: "15rem", objectFit: "fill" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                2. MS Dhoni's new vintage look sets social media on fire, check it
                out here.
              </p>
            </div>
            <div className="card-footer" style={{backgroundColor:'lightgray'}}>
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-80">
            <img
              src="https://media.gqindia.com/wp-content/uploads/2018/05/26-866x956.jpg"
              className="card-img-top"
              alt="image"
              style={{height: "15rem", objectFit: "fill" }}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                3. MS Dhoni's new vintage look sets social media on fire, check it
                out here.
              </p>
            </div>
            <div className="card-footer" style={{backgroundColor:'lightgray'}}>
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
