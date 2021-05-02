import React from "react";
import Header from "../Header/Header";
import "./ProjectDetails.css";
import cover1 from "../../images/screenshot.png";
import cover2 from "../../images/screenshoot4.png";
import cover3 from "../../images/screenshot3.png";
import ProjectDetailsCart from "./ProjectDetailsCart/ProjectDetailsCart";
import Footer from "../Footer/Footer";

const ProjectDetails = () => {
  const projects = [
    {
      id: 1,
      title: "Fashionista Portraits",
      img: cover1,
      description:
        "Fashionista Portraits is a complete full-stack project of an event photographer.",
      points1:
        "Service-related complete full-stack projects for an event photographer. Creating own database with help of MongoDB.",
      points2:
        "Users can book any service with help of stripe payment systems by log into Google and also check their booking status & give a review in the dashboard.",
      point3:
        "Different section for admin to change booking service status, delete & add new service collection.",
      github: "github.com/MousumiMitu/fashionsta-portraits",
      live: "complete-web-client11.web.app/",
    },
    {
      id: 2,
      title: "Express Travel",
      img: cover2,
      description:
        "Express Travel is a react router project for booking rides like bus, train, motorbikes & car.",
      points1:
        "React router project for booking rides like bus, train, motorbikes & car, where used form validation with firebase auth.",
      points2:
        "Create new account by email & Google account and have email password authentication.",
      point3:
        "By clicking selective rides user can see their available different options of fairs.",
      github: "github.com/MousumiMitu/express-travel",
      live: "auth-rider-project.web.app/",
    },
    {
      id: 3,
      title: "Fashion Finds",
      img: cover3,
      description:
        "Fashion Finds is online shopping website where user can order their desire products",
      points1:
        "Fashion finds is a react-based full-stack project for shopping online.",
      points2: "Used private routes for order items & admin management.",
      point3:
        "Google login system for checkout items and admin can manage products by delete &adding new product",
      github: "github.com/MousumiMitu/fashion-finds-client",
      live: "full-stack-project-3931b.web.app/",
    },
  ];
  return (
    <section className="main-container">
      <Header />
      <h2 className="title-text">
        My projects <span className="line-style"></span>
      </h2>
      <div>
        {projects.map((project) => (
          <ProjectDetailsCart
            project={project}
            key={project.id}
          ></ProjectDetailsCart>
        ))}
      </div>
      <Footer></Footer>
    </section>
  );
};

export default ProjectDetails;
