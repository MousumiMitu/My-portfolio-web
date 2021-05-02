import React from "react";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
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
        </div>
      </div>
      <Projects></Projects>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
