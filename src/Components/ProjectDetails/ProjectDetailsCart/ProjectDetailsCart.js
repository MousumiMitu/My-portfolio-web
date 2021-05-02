import React from "react";
import "./ProjectDetailsCart.css";

const ProjectDetailsCart = ({ project }) => {
  const {
    title,
    img,
    description,
    points1,
    points2,
    point3,
    github,
    live,
  } = project;
  return (
    <div className="project-details">
      <div className="project-cover ">
        <img src={img} alt="" className="img-fluid project-img" />
      </div>
      <div className="project-description">
        <h3>{title}</h3>
        <h5>{description}</h5>
        <ul>
          <li>{points1}</li>
          <li>{points2}</li>
          <li>{point3}</li>
        </ul>
        <div>
          <span className="skills-name">React JS</span>
          <span className="skills-name">React Router</span>
          <span className="skills-name">JavaScript</span>
          <span className="skills-name">HTML</span>
          <span className="skills-name">CSS</span>
          <span className="skills-name">Bootstrap5</span>
        </div>
        <a href={`https://${github}`} target="_blank">
          <i class="fab fa-github social-icon mt-3"></i>
        </a>
        <a href={`https://${live}`} target="_blank">
          <i class="fas fa-external-link-alt social-icon mt-3"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailsCart;
