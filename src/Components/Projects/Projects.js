import React, { useEffect } from "react";
import "./Projects.css";
import img1 from "../../images/screenshot.png";
import img2 from "../../images/screenshot2.png";
import img3 from "../../images/screenshot3.png";
import img4 from "../../images/screenshoot4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="my-5 main-container">
      <h3>My projects</h3>
      <div className="card-section my-5">
        <div className="card-box " data-aos="fade-right">
          <div className="img-box">
            <img src={img1} alt="" />
          </div>
          <div className="text-box my-4">
            <p className=" ">
              Fashionista Portraits is a complete full-stack project of an event
              photographer.
            </p>
            <div className="tech-container">
              <p className="tech-box">React.js</p>
              <p className="tech-box">Node.js</p>
              <p className="tech-box">Express.js</p>
              <p className="tech-box">MongoDB</p>
              <p className="tech-box">Stripe</p>
              <p className="tech-box">Firebase</p>
            </div>
            <div className="icon-box">
              <i class="fab fa-github icon-style"></i>
              <i class="fas fa-external-link-alt icon-style"></i>
            </div>
          </div>
        </div>

        <div className="card-box" data-aos="fade-down">
          <div className="img-box">
            <img src={img3} alt="" />
          </div>
          <div className="text-box my-4 ">
            <p className=" ">
              fashion finds is a full-stack project for online shopping.
            </p>
            <div className="tech-container">
              <p className="tech-box">React.js</p>
              <p className="tech-box">Node.js</p>
              <p className="tech-box">Express.js</p>
              <p className="tech-box">MongoDB</p>
              <p className="tech-box">Firebase</p>
            </div>
            <div className="icon-box ">
              <i class="fab fa-github icon-style"></i>
              <i class="fas fa-external-link-alt icon-style"></i>
            </div>
          </div>
        </div>

        <div className="card-box" data-aos="fade-left">
          <div className="img-box">
            <img src={img4} alt="" />
          </div>
          <div className="text-box my-4 ">
            <p className="">
              React router project for booking rides like bus, train, motorbikes
              & car.
            </p>
            <div className=" tech-container">
              <p className="tech-box">React.js</p>
              <p className="tech-box">Firebase</p>
              <p className="tech-box">Bootstrap</p>
              <p className="tech-box">CSS</p>
              <p className="tech-box">React router</p>
            </div>
            <div className="icon-box ">
              <i class="fab fa-github icon-style"></i>
              <i class="fas fa-external-link-alt icon-style"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
