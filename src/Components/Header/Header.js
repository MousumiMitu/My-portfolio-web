import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <section>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand my-auto" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item ms-4 my-auto">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item ms-4 my-auto">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item ms-4 my-auto">
                <Link class="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li class="nav-item ms-4 my-auto">
                <Link class="nav-link" to="/projects">
                  Blogs
                </Link>
              </li>
              <li class="nav-item ms-4 my-auto">
                <a class="nav-link " href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item ms-4  my-auto ">
                <a class="nav-link me-0" href="#">
                  <button>resume</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
