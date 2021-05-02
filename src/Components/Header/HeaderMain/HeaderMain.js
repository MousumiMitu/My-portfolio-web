import React, { useEffect } from "react";
import "./HeaderMain.css";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../../../images/profile2.png";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 400 });
  }, []);
  return (
    <section className="row d-flex justify-content-around display-section ">
      <div className="col-md-5 mx-auto info-box" data-aos="fade-down">
        <h4 className="heading-1" style={{ color: "f9bf00" }}>
          Hello, Im
        </h4>
        <h1 className="heading-2">Mousumi Akter</h1>
        <span className="design-span"></span>
        <p style={{ color: "#045c88" }} className="my-3 mt-4">
          A passionate and diligent web developer with a productive idea of
          problem-solving knows some languages and frameworks for frontend and
          backend.
        </p>
        <Link to="/about">
          <button className="primary-btn">About me</button>
        </Link>
      </div>
      <div className="col-md-5 profile-img" data-aos="fade-left">
        <img src={profile} alt="" />
      </div>
    </section>
  );
};

export default HeaderMain;
