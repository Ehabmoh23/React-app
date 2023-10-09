import React from "react";
import photo1 from "../../../images/8.jpg";
import style from "../Contact/contact.module.css";
const Contact = () => {
  return (
    <>
      <div className="container mt-4 mb-5 ">
        <h2
          className="fs-3 fw-bold mt-5 text-center mt-5"
          style={{ color: "#f7ea66" }}
        >
          Get The Ticket
        </h2>
        <div className="row mb-3">
          <div className="col-md-4">
            <div className={`item text-center position-relative mt-5`}>
              <img src={photo1} className="img-fluid" alt="" />
              <div
                className={`content text-center position-absolute top-0 start-50 translate-middle-x `}
              >
                <h4 className="mt-2" style={{ color: "#f7ea66" }}>
                  Single Entry
                </h4>
                <h5 className="text-white fs-1 fw-bolder">$99.00</h5>
                <ul className={`${style.content}`}>
                  <li className={`${style.contentLi}`}>Single Entry</li>
                  <li className={`${style.contentLi}`}>Only One Person</li>
                  <li className={`${style.contentLi}`}>2 Hours Limitation</li>
                </ul>
                <div>
                  <button
                    className="btn rounded-pill py-2 px-3 mt-4"
                    style={{ background: "#f7ea66" }}
                  >
                    Get Ticker
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`item text-center position-relative mt-5`}>
              <img src={photo1} className="img-fluid" alt="" />
              <div
                className={` text-center position-absolute top-0 start-50 translate-middle-x `}
              >
                <h4 className="mt-2" style={{ color: "#f7ea66" }}>
                  Single Entry
                </h4>
                <h5 className="text-white fs-1 fw-bolder">$199.00</h5>
                <ul className={`${style.content}`}>
                  <li className={`${style.contentLi}`}>Single Entry</li>
                  <li className={`${style.contentLi}`}>Only One Person</li>
                  <li className={`${style.contentLi}`}>2 Hours Limitation</li>
                </ul>
                <div>
                  <button
                    className="btn rounded-pill py-2 px-3 mt-4"
                    style={{ background: "#f7ea66" }}
                  >
                    Get Ticker
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`item text-center position-relative mt-5`}>
              <img src={photo1} className="img-fluid" alt="" />
              <div
                className={`content text-center position-absolute top-0 start-50 translate-middle-x `}
              >
                <h4 className="mt-2" style={{ color: "#f7ea66" }}>
                  Single Entry
                </h4>
                <h5 className="text-white fs-1 fw-bolder">$299.00</h5>
                <ul className={`${style.content}`}>
                  <li className={`${style.contentLi}`}>Single Entry</li>
                  <li className={`${style.contentLi}`}>Only One Person</li>
                  <li className={`${style.contentLi}`}>2 Hours Limitation</li>
                </ul>
                <div>
                  <button
                    className="btn rounded-pill py-2 px-3 mt-4"
                    style={{ background: "#f7ea66" }}
                  >
                    Get Ticker
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2
          className="fs-3 fw-bold text-center mt-5"
          style={{ color: "#f7ea66" }}
        >
          Invite Someone Special
        </h2>
        <div className="row mt-4 mb-5 text-center">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="string"
                className={`form-control bg-transparent text-white mb-3 me-3 ${style.whitePlaceHolder}`}
                id="exampleInputName"
                placeholder="Guest Name"
              ></input>
              <input
                type="phone"
                className={`form-control bg-transparent text-white ${style.whitePlaceHolder}`}
                id="exampleInputName"
                placeholder="Guest Mobile Number"
              ></input>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                className={`form-control bg-transparent text-white mb-3 me-3 ${style.whitePlaceHolder}`}
                id="exampleInputEmaikl"
                placeholder="Guest Email"
              ></input>
              <input
                type="string"
                className={`form-control bg-transparent text-white  ${style.whitePlaceHolder}`}
                id="exampleInputName"
                placeholder="Guest compine "
              ></input>
            </div>
          </div>
          <button
            className="btn rounded-pill py-2 px-3 mt-4 w-25 d-block mx-auto fw-bolder"
            style={{ background: "#f7ea66" }}
          >
            Send Invitation
          </button>
          <h2
            className="fs-3 fw-bold text-center mt-5"
            style={{ color: "#f7ea66" }}
          >
            Signup For Newsletter
          </h2>
          <div className="form-group d-flex justify-content-center align-items-center mt-3">
            <input
              type="email"
              className={`form-control bg-transparent text-white mb-3 rounded-pill ${style.whitePlaceHolder}`}
              id="exampleInputEmaikl"
              placeholder="your Email here"
            ></input>
            <input
              type="submit"
              value="subscripe"
              className={`btn rounded-pill w-25 mb-3 me-3`}
              style={{ backgroundColor: "#f7ea66" }}
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <h5 className=" mt-2 text-white-50"> Get Update</h5>
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
    </>
  );
};

export default Contact;
