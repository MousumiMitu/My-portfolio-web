import React from "react";

const Footer = () => {
  return (
    <section className="main-container my-5 text-center">
      <div className="my-3">
        <a href="https://github.com/MousumiMitu" target="_blank">
          <i class="fab fa-github social-icon mt-3"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mousumi-akter-759aa2202/"
          target="_blank"
        >
          <i class="fab fa-linkedin social-icon mt-3"></i>
        </a>
        <a href="https://www.facebook.com/mitu.meow" target="_blank">
          <i class="fab fa-facebook social-icon mt-3"></i>
        </a>
        <a href="" target="_blank">
          <i class="fab fa-instagram social-icon mt-3"></i>
        </a>
      </div>
      <p style={{ color: "#045c88" }}>Copyright © 2021 | mousumiAkter</p>
    </section>
  );
};

export default Footer;
