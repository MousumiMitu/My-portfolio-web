import React from "react";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const NavBlogs = () => {
  return (
    <section className="main-container">
      <Header></Header>
      <Blogs></Blogs>
      <Footer></Footer>
    </section>
  );
};

export default NavBlogs;
