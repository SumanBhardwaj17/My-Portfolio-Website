import React, { useState, Suspense } from "react";
import "./App.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"; // FontAwesome brands
import { FiSend } from "react-icons/fi";                // Paper plane
import { BiFile } from "react-icons/bi";               // File
import { BiLinkExternal } from "react-icons/bi"; // External link icon

// Lazy load SkillBar
const SkillBar = React.lazy(() => import("./SkillBar"));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  //
   const [loading, setLoading] = useState(false);
  // 
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  const form = e.target;
  fetch("https://formspree.io/f/xovnndyr", {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    })
    .catch(() => alert("Network error!"))
    .finally(() => setLoading(false));
};


  const resetForm = () => setSubmitted(false);

  return (
    <>
      {/*  navigation */}
      <nav>
        <div className="logo">
          Port<span>folio</span>
        </div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" aria-label="Home section">
            Home
          </a>
          <a href="#about" aria-label="About section">
            About
          </a>
          <a href="#projects" aria-label="Projects section">
            Projects
          </a>
          <a href="#contact" aria-label="Contact section">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section  */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Suman Bhardwaj</span>
            <br />
            Web Developer
          </h1>
          <p>
            I Create immersive digital experiences with cutting-edge
            web-technologies. My passion is turning ideas into interactive
            realities that captivate users.
          </p>
          <a
            href="images/Suman_Resume_Watermark.pdf"
            target="_blank"
            rel="noopener noreferrer"
            loading="lazy"
            className="cta-button"
          >
            View Resume
          </a>
        </div>
        <div className="profile-container">
          <div className="profile-border"></div>
          <div className="tech-icons">
            <i
              className="tech-icon"
              style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
            >
              ⚛️
            </i>
            <i
              className="tech-icon"
              style={{ top: "50%", right: 0, transform: "translateY(-50%)" }}
            >
              💻
            </i>
            <i
              className="tech-icon"
              style={{
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              🔌
            </i>
            <i
              className="tech-icon"
              style={{ top: "50%", left: 0, transform: "translateY(-50%)" }}
            >
              🎨
            </i>
          </div>
          <img
            src="images/neon-night-2-compressed.jpg"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            alt="Profile Picture"
            width="300"
            height="300"
            className="profile-pic"
          />
        </div>
      </section>

      {/* About Section  */}
      <section className="about" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a final-year B.Tech CSE student with a growing passion for
              web-development. Currently learning front-end and back-end
              technologies, I'm focused on building responsive, user-friendly
              websites and expanding my skills through hands-on projects.
            </p>
            <p>
              I'm also exploring frameworks like React and tools like Git, while
              constantly improving my problem-solving and design thinking
              skills. I'm excited to keep learning and take on real- world
              challenges in tech.
            </p>
            <p>
              Beyond coding, I enjoy collaborating on creative ideas, learning
              from the developer community, and stay updated with the latest
              trends in web and software development, I'm always open to
              opportunities that help me grow both personally and
              professionally.
            </p>
          </div>

          <div className="skills">
            <div className="skill-item">
              <div className="skill-name">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <div className="skill-bar">
<Suspense fallback={<div>Loading...</div>}>
  <SkillBar percent="95%" />
</Suspense>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-name">
                <span>CSS</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
<Suspense fallback={<div>Loading...</div>}>
  <SkillBar percent="90%" />
</Suspense>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-name">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
<Suspense fallback={<div>Loading...</div>}>
  <SkillBar percent="80%" />
</Suspense>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-name">
                <span>React</span>
                <span>60%</span>
              </div>
              <div className="skill-bar">
<Suspense fallback={<div>Loading...</div>}>
  <SkillBar percent="60%" />
</Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section  */}
      <section className="projects" id="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {/* 1st card */}
          <div className="project-card">
            <img
              src="images/coding png-compressed.avif"
              loading="lazy"
              alt="Tic Tac Toe"
              height="200px"
              className="project-img"
            />
            <div className="project-info">
              <h3 className="project-title">Tic Tac Toe</h3>
              <p className="project-description">
                A classic two-player strategy game built with a clean and
                interactive interface. Players take turns marking X and O on a
                3x3 grid, with the objective of aligning three symbols
                horizontally, vertically, or diagonally. This project
                demonstrates strong fundamentals in logic building, user
                interaction handling, and game state management, while keeping
                the design simple, intuitive, and responsive.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href=" https://sumanbhardwaj17.github.io/tic-tac-toe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <BiLinkExternal />
                  Live Demo
                </a>
                <a
                  href="https://github.com/SumanBhardwaj17/tic-tac-toe"
                  target="_blank"
                  className="project-link"
                >
                  <FaGithub />
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* 2nd card  */}
          <div className="project-card">
            <img
              src="images/coding png 2-compressed.avif"
              loading="lazy"
              alt="Rock Paper Scissors"
              height="200px"
              className="project-img"
            />
            <div className="project-info">
              <h3 className="project-title">Rock Paper Scissors</h3>
              <p className="project-description">
                An engaging digital version of the classic game where players
                choose rock, paper, or scissors to compete against the computer.
                This project demonstrates the use of conditional logic,
                randomized computer moves, and dynamic result evaluation, while
                focusing on smooth gameplay and a simple, user-friendly
                interface that delivers an enjoyable interactive experience.
              </p>
              <div className="project-tech">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a
                  href="https://sumanbhardwaj17.github.io/Rock-Paper-Scissors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <BiLinkExternal />
                  Live Demo
                </a>
                <a
                  href="https://github.com/SumanBhardwaj17/Rock-Paper-Scissors"
                  target="_blank"
                  className="project-link"
                >
                  <FaGithub />
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section  */}
      <section className="contact" id="contact">
        {!submitted && <h2 className="section-title">Get In Touch</h2>}
        {!submitted ? (
          <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message<span style={{ color: "red" }}>*</span>
            </label>
            <textarea
              name="message"
              id="message"
              className="form-textarea"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        ) : (
          <div className="thank-you">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully.</p>
             <button className="reset-btn" onClick={resetForm}>
              Send Again
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/suman-bhardwaj-2bb15a282/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/SumanBhardwaj17"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="images/Suman_Resume_Watermark.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Resume"
          >
            <BiFile />
          </a>
          <a
            href="mailto:suman2206393@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Email"
          >
            <FiSend />
          </a>
        </div>
        <p className="copyright">
          &#169; 2025 SumanPortfolio. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
