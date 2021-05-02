import React, { useEffect } from "react";
import "./Blogs.css";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.jpg";
import blog3 from "../../images/blog3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const blogs = [
    {
      title: "Introduction to React Js",
      img: blog1,
      description:
        "React is a JavaScript library created by Facebook.ReactJS offers graceful solutions to some of front-end programming’s most...",
    },
    {
      title: "Useful tricks for Javascript Developer",
      img: blog2,
      description:
        "JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations...",
    },
    {
      title: "Difference between HTML & HTML5 ",
      img: blog3,
      description:
        "A hypertext markup language (HTML) is the primary language for developing web pages. HTML5 is a new version of HTML with new...",
    },
  ];
  return (
    <section className="main-container my-5">
      <h3 className="title-text">
        My Blogs<span className="line-style"></span>
      </h3>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" data-aos="fade-down">
            <img src={blog.img} alt="" />
            <h4 style={{ color: "#045c88" }}>{blog.title}</h4>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
