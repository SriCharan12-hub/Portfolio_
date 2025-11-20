import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Download,
} from "lucide-react";
import "./portfolio.css";

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = ["hero", "projects", "certs", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Animated Background Elements */}
      <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      {/* Header */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-content">
          <h2 className="header-name">
            <span className="name-first">Palem</span>
            <span className="name-last">SriChaitanya</span>
          </h2>
          <nav className="nav">
            <a
              href="#hero"
              className={`nav-link ${activeSection === "hero" ? "active" : ""}`}
              onClick={(e) => scrollToSection(e, "hero")}
            >
              Home
            </a>
            <a
              href="#projects"
              className={`nav-link ${
                activeSection === "projects" ? "active" : ""
              }`}
              onClick={(e) => scrollToSection(e, "projects")}
            >
              Projects
            </a>
            <a
              href="#certs"
              className={`nav-link ${
                activeSection === "certs" ? "active" : ""
              }`}
              onClick={(e) => scrollToSection(e, "certs")}
            >
              Certifications
            </a>
            <a
              href="#contact"
              className={`nav-link ${
                activeSection === "contact" ? "active" : ""
              }`}
              onClick={(e) => scrollToSection(e, "contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge">
                <Code size={16} />
                <span>Available for Opportunities</span>
              </div>
              <h1 className="hero-title">
                <span className="title-line">Software</span>
                <span className="title-line gradient-text">Engineer</span>
              </h1>
              <p className="hero-lead">
                Motivated Software Engineer with experience in designing and
                delivering reliable applications, strong problem-solving
                abilities, and a focus on building efficient solutions that
                create real impact.
              </p>
              <div className="hero-education">
                <div className="edu-item">
                  <GraduationCap className="edu-icon" size={20} />
                  <div>
                    <strong>B.Tech — Computer Science and Engineering</strong>
                    <p>Vellore Institute of Technology - Andhra Pradesh</p>
                    <span className="cgpa">CGPA: 8.65</span>
                  </div>
                </div>
              </div>
              <div className="hero-buttons">
                <a
                  className="btn btn-primary"
                  href="https://www.linkedin.com/in/palem-srichaitanya/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://github.com/srichaitanyapalem05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  className="btn btn-outline"
                  href="https://drive.google.com/file/d/1lf6SgmAzkS1p1rmAu1MhX1BC_Vf5RjCN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={20} />
                  <span>Resume</span>
                </a>
              </div>
            </div>
            <div className="hero-profile">
              <div className="profile-card">
                <div className="profile-pic-wrapper">
                  <img
                    className="profile-pic"
                    src="https://res.cloudinary.com/sricharan/image/upload/v1763571453/Proessional_Photo_ybt7gn.jpg"
                    alt="Palem SriChaitanya"
                  />
                  <div className="profile-ring"></div>
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">Palem SriChaitanya</h3>
                  <p className="profile-title">Software Engineer</p>
                  <div className="profile-contact">
                    <div className="contact-detail">
                      <Mail size={16} />
                      <span>srichaitanyapalem05@gmail.com</span>
                    </div>
                    <div className="contact-detail">
                      <Phone size={16} />
                      <span>+91 7981425642</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="section-header">
            <Code className="section-icon" size={32} />
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          <div className="skills-container">
            <div className="skill-item" style={{ animationDelay: "0.1s" }}>
              <div className="skill-icon">☕</div>
              <span>Java</span>
            </div>
            <div className="skill-item" style={{ animationDelay: "0.2s" }}>
              <div className="skill-icon">🍃</div>
              <span>Spring Boot</span>
            </div>

            <div className="skill-item" style={{ animationDelay: "0.3s" }}>
              <div className="skill-icon">🐬</div>
              <span>MySQL</span>
            </div>

            <div className="skill-item" style={{ animationDelay: "0.3s" }}>
              <div className="skill-icon">🗄️</div>
              <span>SQL</span>
            </div>

            <div className="skill-item" style={{ animationDelay: "0.3s" }}>
              <div className="skill-icon">🔄</div>
              <span>SDLC</span>
            </div>

            <div className="skill-item" style={{ animationDelay: "0.3s" }}>
              <div className="skill-icon">📬</div>
              <span>Postman</span>
            </div>

             

 

 
            <div className="skill-item" style={{ animationDelay: "0.4s" }}>
              <div className="skill-icon">☁️</div>
              <span>AWS</span>
            </div>
            <div className="skill-item" style={{ animationDelay: "0.5s" }}>
              <div className="skill-icon">🔌</div>
              <span>REST APIs</span>
            </div>
            <div className="skill-item" style={{ animationDelay: "0.6s" }}>
              <div className="skill-icon">📦</div>
              <span>GitHub</span>
            </div>
            <div className="skill-item" style={{ animationDelay: "0.7s" }}>
              <div className="skill-icon">🤖</div>
              <span>Machine Learning</span>
            </div>
          </div>
          <div className="availability-badge">
            <span className="pulse-dot"></span>
            Open to internships & entry-level roles
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="section-header">
            <Briefcase className="section-icon" size={32} />
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Some of my recent work</p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-number">01</div>
              <h3 className="project-title">Employee Management System</h3>
              <p className="project-tech">
                Java • Spring Boot • MySQL • AWS RDS • Postman
              </p>
              <p className="project-description">
                Built and deployed a backend system to manage employees and
                departments with full CRUD REST APIs. Designed relational schema
                in MySQL and hosted the database on AWS RDS for cloud
                deployment.
              </p>
              <a
                className="project-link"
                href="https://github.com/srichaitanyapalem05/employee-mgmt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Project</span>
                <ChevronRight size={18} />
              </a>
            </div>

            <div className="project-card">
              <div className="project-number">02</div>
              <h3 className="project-title">
                Cloud Inventory & Stock Tracking
              </h3>
              <p className="project-tech">Java • Spring Boot • MySQL • AWS</p>
              <p className="project-description">
                Developed a full-stack solution for inventory, product, and
                order management with real-time stock tracking. Designed and
                deployed a normalized MySQL schema on AWS RDS to support
                scalable cloud storage.
              </p>
            </div>

            <div className="project-card">
              <div className="project-number">03</div>
              <h3 className="project-title">Multimodal Emotion Recognition</h3>
              <p className="project-tech">Wav2Vec2.0 • DistilBERT • DeepFace</p>
              <p className="project-description">
                Engineered a deep learning system for emotion recognition using
                speech, text, and facial data. Achieved an accuracy of 94.7%
                using multimodal fusion. Built a Streamlit interface for
                real-time emotion prediction.
              </p>
            </div>

            <div className="project-card">
              <div className="project-number">04</div>
              <h3 className="project-title">Ai Surveillance system</h3>
              <p className="project-tech">
                Python • OpenCV • YOLOv5 • DeepSORT • MediaPipe{" "}
              </p>
              <p className="project-description">
                Developed an AI-powered monitoring system capable of recognizing people and objects in real time and tracking their movement across the video feed. Integrated YOLOv5 for fast detection and DeepSORT for assigning consistent IDs, ensuring each individual is accurately followed across frames. Added a live counter that updates the number of detected persons and objects to simplify surveillance and reporting. Built a real-time interface that displays the video stream along with tracking boxes, IDs, and detection metrics.
              </p>
              <a
                className="project-link"
                href="https://github.com/srichaitanyapalem05/AI_Surveillance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Project</span>
                <ChevronRight size={18} />
              </a>
            </div>

            <div className="project-card">
              <div className="project-number">05</div>
              <h3 className="project-title">Complaint connect</h3>
              <p className="project-tech">
                Node.js • Express • MySQL • HTML/CSS/JavaScript
      
              </p>
              <p className="project-description">
               Developed a full-stack complaint management system that allows users to submit, track, and manage complaints through a structured workflow. Built REST-based backend services using Express and connected them to a MySQL database for storing user accounts, roles, and complaint records. Implemented separate interfaces for admins and employees, enabling role-based access for registering, logging in, and handling complaints. Designed a simple front-end using HTML, CSS, and JavaScript to provide easy navigation for submitting and reviewing complaint details.
              </p>
              <a
                className="project-link"
                href="https://github.com/srichaitanyapalem05/ComplaintConnect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Project</span>
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certs" className="certifications-section">
          <div className="section-header">
            <Award className="section-icon" size={32} />
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">Professional achievements</p>
          </div>
          <div className="certs-grid">
            <div className="cert-card">
              <div className="cert-badge">
                <Award size={32} />
              </div>
              <h3 className="cert-title">AWS Certified Cloud Practitioner</h3>
              <p className="cert-issuer">Amazon Web Services</p>
              <a
                href="https://cp.certmetrics.com/amazon/en/public/verify/credential/ec7fed36a5ce45b7a304250424e63f7b"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                <span>Verify Credential</span>
                <ChevronRight size={16} />
              </a>
            </div>
            <div className="cert-card">
              <div className="cert-badge">
                <Award size={32} />
              </div>
              <h3 className="cert-title">AWS Academy Cloud Architecting</h3>
              <p className="cert-issuer">Amazon Web Services</p>
              <a
                href="https://www.credly.com/badges/692d381b-5b94-4da6-a31f-4c475c8f422d/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                <span>Verify Credential</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="leadership-section">
          <div className="section-header">
            <GraduationCap className="section-icon" size={32} />
            <h2 className="section-title">Leadership & Activities</h2>
            <p className="section-subtitle">Community involvement</p>
          </div>
          <div className="leadership-card">
            <div className="leadership-header">
              <h3>Lead — Computer Society Of India (CSI)</h3>
              <span className="leadership-duration">2024 – Present</span>
            </div>
            <p className="leadership-institution">VIT-AP, Andhra Pradesh</p>
            <ul className="leadership-list">
              <li>
                Conducted the offline seminar with Varun Singla (Gate Smashers),
                attracting a community of over 2 million online subscribers.
              </li>
              <li>
                Organized and supervised the National Level HackX event, hosted
                by the central government.
              </li>
              <li>
                Initiated multiple skill development workshops and guest
                lectures to enhance member knowledge and industry readiness.
              </li>
              <li>
                Fostered collaboration among members and external partners,
                boosting participation and community impact.
              </li>
            </ul>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements-section">
          <div className="section-header">
            <Award className="section-icon" size={32} />
            <h2 className="section-title">Achievements</h2>
            <p className="section-subtitle">Notable accomplishments</p>
          </div>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h4>Best Chapter Award</h4>
              <p>
                Led the chapter to secure the Best Chapter Award through active
                participation and strategic planning.
              </p>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">☁️</div>
              <h4>AWS Cloud Practitioner</h4>
              <p>
                Successfully achieved the AWS Certified Cloud Practitioner
                Certification, demonstrating foundational expertise in AWS cloud
                services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="section-header">
            <Mail className="section-icon" size={32} />
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's connect and collaborate</p>
          </div>
          <div className="contact-grid">
            <a
              href="mailto:srichaitanyapalem05@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="contact-info">
                <h4>Email</h4>
                <p>srichaitanyapalem05@gmail.com</p>
              </div>
            </a>
            <a href="tel:+917981425642" className="contact-card">
              <div className="contact-icon-wrapper">
                <Phone size={24} />
              </div>
              <div className="contact-info">
                <h4>Phone</h4>
                <p>+91 7981425642</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/palem-srichaitanya/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <Linkedin size={24} />
              </div>
              <div className="contact-info">
                <h4>LinkedIn</h4>
                <p>palem-srichaitanya</p>
              </div>
            </a>
            <a
              href="https://github.com/srichaitanyapalem05"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon-wrapper">
                <Github size={24} />
              </div>
              <div className="contact-info">
                <h4>GitHub</h4>
                <p>srichaitanyapalem05</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2024 <strong>Palem SriChaitanya</strong>. All rights reserved.
          </p>
          <p className="footer-tagline">Built with passion & precision ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
