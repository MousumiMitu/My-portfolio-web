import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./About.css";
import profile from "../../images/profile2.png";

const About = () => {
  return (
    <section className="main-container route-page">
      <Header></Header>
      <div className="row mt-4 d-flex justify-content-around">
        <div className="col-md-5 about-section text-center">
          <img className="text-center" src={profile} alt="" />
          <h3>
            <span>I'm</span> Mousumi Akter
          </h3>
          <p className="about-text">
            A passionate and diligent web developer with a productive idea of
            problem-solving knows some languages and frameworks for frontend and
            backend. I am enthusiastic to explore more about web development and
            advance my skills to work with a development company.
          </p>
          <a className="social-icon" href="https://github.com/MousumiMitu">
            <i class="fab fa-github"></i>
          </a>
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/mousumi-akter-759aa2202/"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" className="social-icon">
            <i class="fab fa-facebook"></i>
          </a>
        </div>
        <div className="col-md-6">
          <h2 className="title-text">
            My Skills <span className="line-style"></span>
          </h2>
          <div className="skills-container">
            <h4 className="skill-title">Expertise</h4>
            <span className="skills-name">React JS</span>
            <span className="skills-name">React Router</span>
            <span className="skills-name">JavaScript</span>
            <span className="skills-name">HTML</span>
            <span className="skills-name">CSS</span>
            <span className="skills-name">Bootstrap5</span>

            <h4 className="skill-title">Comfortable</h4>
            <span className="skills-name">MongoDB</span>
            <span className="skills-name">Node JS</span>
            <span className="skills-name">Express JS</span>

            <h4 className="skill-title">Familiar</h4>
            <span className="skills-name">Redux</span>
            <span className="skills-name">Typescript</span>

            <h4 className="skill-title">Tools & Softwares</h4>
            <span className="skills-name">Github</span>
            <span className="skills-name">Visual Studio code</span>
            <span className="skills-name">Heroku</span>
            <span className="skills-name">Firebase</span>
            <span className="skills-name">Netlify</span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default About;
