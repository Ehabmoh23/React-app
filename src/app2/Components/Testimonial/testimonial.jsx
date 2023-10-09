import React from "react";
import photo1 from "../../../images/7.jpg";
import photo2 from "../../../images/5.jpg";

const Testimonial = () => {
  return (
    <>
      <div className="container mt-5 ">
        <h1
          className="fs-3 fw-bold mt-5 text-center mt-5"
          style={{ color: "#f7ea66" }}
        >
          Our Halloween's Artist
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-6 mt-4">
              <div className="d-flex justify-content-center align-items-center">
                <img src={photo1} className=" w-100 me-5 rounded-pill " alt="" />
                <div className="content text-start text-white">
                  <h5 className="ms-3 mt-2" style={{ color: "#f7ea66" }}>
                    Tukang Sihir
                  </h5>
                  <h6 className="ms-3 mt-2"> Exclusive Guest</h6>
                  <p className="text-start mt-3 text-white lead">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,
                    Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                    Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation
                    Ullamco Laboris.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="d-flex justify-content-center align-items-center">
                <img src={photo2} className=" w-100 me-5 rounded-pill " alt="" />
                <div className="content text-start text-white">
                  <h5 className="ms-3 mt-2" style={{ color: "#f7ea66" }}>
                    Tukang Sihir
                  </h5>
                  <h6 className="ms-3 mt-2"> Exclusive Guest</h6>
                  <p className="text-start mt-3 text-white lead">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,
                    Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                    Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation
                    Ullamco Laboris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
