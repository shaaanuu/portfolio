import React from "react";
import "./old.css";

export const Old = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            Shan
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
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="about" class="about-section">
        <div class="container text-center">
          <img src="src/assets/img.jpeg" alt="Profile Picture" class="profile-image" />
          <h1 class="display-4">Hey there! I'm Muhammed Shan</h1>
          <p class="lead">Mobile App Developer | Web Designer</p>
          <p>
            Hello! I'm Muhammed Shan, a professional enthusiastic about
            effective online solutions. I specialize in crafting top-notch
            mobile apps using Dart and Flutter, along with expertise in web
            designing.
          </p>
          <p>
            Outside of my work, you'll find me immersed in books, exploring a
            wide range of non-fiction and fiction topics. I also keep up with
            the latest trends in mobile app development (especially Flutter) and
            web designing.
          </p>
          <p>
            If you're interested in my work or potential collaborations, feel
            free to reach out at{" "}
            <a href="mailto:shanndwitch@gmail.com">shanndwitch@gmail.com</a>.
            I'm always open to exciting opportunities and would be thrilled to
            connect with you!
          </p>
          <div class="social-icons">
            <a href="https://www.facebook.com/ItZzzz.Shan" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/itZz__Shanu" class="social-icon">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/_itz__shan__/"
              class="social-icon"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" class="footer-section">
        <div class="container text-center">
          <h2 class="section-title">Contact Me</h2>
          <a href="mailto:shanndwitch@gmail.com">shanndwitch@gmail.com</a>{" "}
          <br />
          <a href="tel:+918547485752">+918547485752</a>
        </div>
      </footer>
    </>
  );
};
