import React from "react";
const About = () => {
  return (
    <>
      <div className= {`container w-50 mt-5`}>
        <div className={`row `}>
          <div className="  mt-5  d-flex flex-column justify-content-center align-items-center">
            <h1 className="fs-1 fw-bolder mt-5"  style={{color:"#f7ea66"}}>About The Party</h1>
            <p className="text-center mt-3 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt
            </p>
            <p className="text-center mt-3 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <button
              className="btn rounded-pill py-2 px-3"
              style={{ background: "#f7ea66" }}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
