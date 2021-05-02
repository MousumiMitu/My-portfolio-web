import React from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import HeaderMain from "../Header/HeaderMain/HeaderMain";
import Projects from "../Projects/Projects";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="header-section">
        <div className="over-lay">
          <div className="main-container">
            <Header></Header>
            <HeaderMain></HeaderMain>
          </div>
          {/* <div class="custom-shape-divider-bottom-1619864649">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 892.25 114.72 1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div> */}
        </div>
      </div>

      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
