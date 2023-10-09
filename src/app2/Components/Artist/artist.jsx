import React from "react";
import photo from "../../../images/3.jpg";
const Artist = () => {
  return (
    <>
      <div className="container mt-5 ">
        <h1
          className="fs-3 fw-bold mt-5 text-center mt-5"
          style={{ color: "#f7ea66" }}
        >
          Our Halloween's Artist
        </h1>
        {/* <div className="row justify-content-center align-items-center">
            <div className=" col-md-5 mt-4 ">
              <div className="d-flex justify-content-center align-items-center">
                <img src={photo} className="img-fluid w-50 me-5" alt="" />
                <div className="content text-start text-white">
                  <h5>DJ Remerson Huke</h5>
                  <h6>Lead DJ On Deadpoll</h6>
                  <p className="text-start mt-3 text-white lead">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,
                    Sed Do Eiusmod Tempor Incididunt Ut Labore.
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-md-5 mt-4 offset-2">
              <div className="d-flex justify-content-center align-items-center">
                <img src={photo} className="img-fluid w-50 me-5" alt="" />
                <div className="content text-start text-white">
                  <h5>DJ Remerson Huke</h5>
                  <h6>Lead DJ On Deadpoll</h6>
                  <p className="text-start mt-3 text-white lead">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,
                    Sed Do Eiusmod Tempor Incididunt Ut Labore.
                  </p>
                </div>
              </div>
            </div>
        </div> */}
        <div className="d-flex justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-5 mt-4">
              <div className="d-flex justify-content-center align-items-center">
                <img src={photo} className="img-fluid w-50 me-5" alt="" />
                <div className="content text-start text-white">
                  <h5>DJ Remerson Huke</h5>
                  <h6>Lead DJ On Deadpoll</h6>
                  <p className="text-start mt-3 text-white lead">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,
                    Sed Do Eiusmod Tempor Incididunt Ut Labore.
                  </p>
                  <div className="icons d-flex mt-4">
                  <i
                    class="fa-brands fa-facebook fa-lg ms-2 me-3"
                    style={{ color: "#f7ea66" }}
                  ></i>
                      <i
                    class="fa-brands fa-twitter fa-lg me-3"
                    style={{ color: "#f7ea66" }}
                  ></i>
                      <i
                    class="fa-brands fa-instagram fa-lg me-3"
                    style={{ color: "#f7ea66" }}
                  ></i>
                      <i
                    class="fa-brands fa-linkedin fa-lg me-3"
                    style={{ color: "#f7ea66" }}
                  ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-4 offset-2">
              <div className="d-flex justify-content-center align-items-center">
                <img src={photo} className="img-fluid w-50 me-5" alt="" />
                <div className="content text-start text-white">
                  <h5>DJ Remerson Huke</h5>
                  <h6>Lead DJ On Deadpoll</h6>
                  <p className="text-start mt-3 text-white lead">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit,
                    Sed Do Eiusmod Tempor Incididunt Ut Labore.
                  </p>
                  <div className="icons d-flex mt-4">
                  <i
                    class="fa-brands fa-facebook fa-lg ms-2 me-3"
                    style={{ color: "#f7ea66" }}
                  ></i>
                      <i
                    class="fa-brands fa-twitter fa-lg me-3"
                    style={{ color: "#f7ea66" }}
                  ></i>
                      <i
                    class="fa-brands fa-instagram fa-lg me-3"
                    style={{ color: "#f7ea66" }}
                  ></i>
                      <i
                    class="fa-brands fa-linkedin fa-lg me-3"
                    style={{ color: "#f7ea66" }}
                  ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
