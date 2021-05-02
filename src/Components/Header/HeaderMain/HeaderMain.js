import React, { useEffect } from "react";
import "./HeaderMain.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderMain = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 400 });
  }, []);
  return (
    <section
      className="row d-flex justify-content-around display-section "
      style={{ border: "1px solid red" }}
    >
      <div
        className="col-md-5 mx-auto"
        data-aos="fade-down"
        style={{ border: "1px solid red" }}
      >
        <h1>
          {/* <span className="design-span"></span>  */}
          Welcome
        </h1>
        <h1>Im, Mousumi Akter</h1>

        {/* <p>
          I am a passionate front-end web developer with a productive idea of
          problem-solving, looking for opportunities to enhance the technical
          skills.
        </p> */}
        <button>About me</button>
      </div>
      <div className="col-md-5"></div>
    </section>
  );
};

export default HeaderMain;
