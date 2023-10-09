import React from "react";
import photo1 from "../../../images/4.jpg";
import photo2 from "../../../images/5.jpg";
import photo3 from "../../../images/6.jpg";
import photo4 from "../../../images/7.jpg";
const Gallery = () => {
  return (
    <>
      <div className="container mt-5 ">
        <h1
          className="fs-3 fw-bold mt-5 mb-5 text-center mt-5"
          style={{ color: "#f7ea66" }}
        >
          Halloween Gallery
        </h1>

        <div className="row">
          <div className="col-md-3 mt-2">
            <div className="justify-content-center align-items-center">
              <img src={photo1} className="img-fluid w-100" alt="" />
              <div className="content text-start text-white">
                <h5 className="ms-3 mt-2" style={{ color: "#f7ea66" }}>
                  Vampire Sherk
                </h5>
                <h6 className="ms-3 mt-2"> Special Guest</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="content text-start text-white">
              <h5 className="ms-3 mt-2" style={{ color: "#f7ea66" }}>
                Blooddy Ricker
              </h5>
              <h6 className="ms-3 mt-2"> Premium Guest</h6>
            </div>
            <div className="justify-content-center align-items-center">
              <img src={photo2} className="img-fluid w-100" alt="" />
            </div>
          </div>
          <div className="col-md-3 mt-2">
            <div className="justify-content-center align-items-center">
              <img src={photo3} className="img-fluid w-100" alt="" />
              <div className="content text-start text-white">
                <h5 className="ms-3 mt-2" style={{ color: "#f7ea66" }}>
                  Horror Fantsma
                </h5>
                <h6 className="ms-3 mt-2"> Exclusive Guest</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <div className="content text-start text-white">
              <h5 className="ms-3 mt-2" style={{ color: "#f7ea66" }}>
                Tukang Sihir
              </h5>
              <h6 className="ms-3 mt-2"> Exclusive Guest</h6>
            </div>
            <div className="justify-content-center align-items-center">
              <img src={photo4} className="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
