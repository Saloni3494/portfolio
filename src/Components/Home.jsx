import React, { useEffect, useState } from "react";

function Home() {
  const roles = ["Developer", "AI/ML", "Enthusiast"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === roles.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div>
      <header id="header">
        <div className="container">
          <nav
            className="brand-time"
            style={{ display: "flex", alignContent: "center" }}
          >
            <div
              className="row"
              style={{ alignItems: "center", alignContent: "center" }}
            >
              <div className="col-6 col-lg-3">
                <a href="index.html">
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/Images/logo-light.png`}
                    alt="logo"
                    style={{ width: "60%" }}
                  />
                </a>
              </div>

              <div className="col-lg-3">
                <p>
                  Pune, Maharashtra
                  /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p id="time"></p>
              </div>

              <div className="col-lg-3 d-flex justify-content-end gap-4">
                <a className="nav-item" href="#about">
                  ABOUT
                </a>
                <a className="nav-item" href="#works">
                  WORKS
                </a>
                <a className="nav-item" href="#experience">
                  EXPERIENCE
                </a>
                <a className="nav-item" href="#contact">
                  CONTACT
                </a>
              </div>

              <div className="col-6 col-lg-3">
                <div className="toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="menu-items">
                  <ul className="menu-links">
                    <li>
                      <a className="menu-item" href="#about">
                        ABOUT
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="#works">
                        WORKS
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="#experience">
                        EXPERIENCE
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="#contact">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                  <div className="social-container">
                    <a
                      href="https://github.com/Saloni3494"
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB
                    </a>
                    <img
                      src={`${process.env.PUBLIC_URL}/Assets/Images/Icons/arrow.svg`}
                      alt="arrow"
                    />
                    <a
                      href="https://www.linkedin.com/in/saloni-tanmor/"
                      className="social-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINKEDIN
                    </a>
                    <img
                      src={`${process.env.PUBLIC_URL}/Assets/Images/Icons/arrow.svg`}
                      alt="arrow"
                    />
                    {/* <a href="https://www.fiverr.com/s/P2N2Gqxs" className="social-icon" target="_blank" rel="noopener noreferrer">FIVERR</a> */}
                    <img
                      src={`${process.env.PUBLIC_URL}/Assets/Images/Icons/arrow.svg`}
                      alt="arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      

      {/* HOME SECTION START */}
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/logo-light.png`}
                alt="Brand Logo"
                style={{ width: "100%", mixBlendMode: "screen" }}
              /> */}
              <div style={{ marginBottom: "1rem" }}></div>
              <div className="hero-container">
                <div className="hero-content">
                  <h1 className="name">Saloni Tanmor</h1>
                </div>
                <p className="animated-role" style={{ fontSize: "2.5rem" }}>
                  {roles[currentIndex]}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/first-profile.jpg`}
                alt="Process Icon"
                style={{ width: "90%", borderRadius: "50%" }}
              />
            </div>
          </div>
          <div className="scroll-indicator">
            {/* <svg width="30" height="30" viewBox="0 0 30 30">
              <path
                d="M15 5v20M7 17l8 8 8-8"
                stroke="#fff"
                fill="none"
                strokeWidth="2"
              />
            </svg> */}
          </div>
        </div>
      </section>
      {/* HOME SECTION END */}

      <div className="divider">
        <hr />
      </div>

      {/* ABOUT SECTION START */}
      <section id="about" className="about">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-8">
              <h1 id="text-about">ABOUT</h1>
              <h5 className="subtitle">
                {/* <u className="underlined">CREATING WEBSITES FROM EMPTINESS</u> */}
              </h5>
            </div>
            <div className="col-md-4 text-md-end">
              <span className="section-label">let's work together</span>
              <br />
            </div>
          </div>

          <div className="row g-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/profile-img.jpg`}
                alt="Profile Image"
                className="profile-image"
              />
              {/* <a
                href={`${process.env.PUBLIC_URL}/Assets/Images/Updated 8(WEB).pdf`}
                className="download-resume"
                download="Updated 8(WEB).pdf"
              >
                DOWNLOAD RESUME
              </a> */}

              <span className="social-links">
                <a
                  href="https://github.com/Saloni3494"
                  className="social-icon"
                  aria-label="GitHub"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/Images/Icons/github.svg`}
                    alt="GitHub"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/saloni-tanmor/"
                  className="social-icon"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/Images/Icons/linkedin.svg`}
                    alt="LinkedIn"
                  />
                </a>
                {/* <a
                  href="https://www.facebook.com/"
                  className="social-icon"
                  aria-label="facebook"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/Images/Icons/facebook.svg`}
                    alt="Facebook"
                  />
                </a> */}
                {/* <a
                  href="https://www.fiverr.com/s"
                  className="social-icon"
                  aria-label="fiverr"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/Images/Icons/fiverr.png`}
                    alt="Fiverr"
                  />
                </a> */}
              </span>
            </div>
            <div className="col-md-6">
              <div className="mb-5">
                <h2 className="section-title">
                  <b>ABOUT ME</b>{" "}
                </h2>
                <p style={{ textAlign: "left" }}>
                  Passionate about building tech that solves real-world
                  problems. <br></br>
                  <br></br>
                  Strong Communication Skills, and a Proven Track Record in
                  Frontend, Backend, and Software Development. A Dedicated
                  Problem Solver and Collaborative Team Player. Technology
                  excites me and I am always in awe of the change it drives in
                  the world. <br></br>
                  <br></br>
                  Technical Proficiency: <br></br>
                  🔹Languages: Proficient in Python, PHP, Java, C, C++,
                  JavaScript <br></br>
                  🔹Frameworks & Stack: <br></br> - .NET<br></br> - MERN Stack{" "}
                  <br></br>- Flask (Python Web Framework)<br></br> - Eel (Python
                  + JS desktop apps)<br></br> 🔹Database: MySQL, SQLite3,
                  MongoDB<br></br> 🔹Tools & Technologies: Git, AWS, Google
                  Cloud, Firebase
                  <br></br>
                  <br></br>I’m also actively solving DSA problems, building
                  consistency (100+ days and counting!), and participating in
                  tech communities like GSSoC, IIRS-ISRO, and Google Cloud
                  Arcade.
                  <br></br>
                  <br></br>And what I might lack in skills I make up for with my
                  determination to learn.
                </p>
              </div>

              {/* <div className="mb-5">
                <h2 className="section-title"><b>CERTIFICATES</b> </h2>
                <div className="achievement-item">
                  <a
                    href="/"
                    target="_blank"
                  >
                    Google Cloud Cybersecurity
                  </a>
                  <span>2024</span>
                </div>
                <div className="achievement-item">
                  <a
                    href="/"
                    target="_blank"
                  >
                    The SecOps Group- Certified Network Security Practitioner
                    (CNSP)
                  </a>
                  <span>2024</span>
                </div>
              </div> */}

              <div>
                <h2 className="section-title">
                  <b>MY MISSION</b>
                </h2>
                <p>
                  My goal is to build engaging, accessible, and high-performing
                  web experiences that create a meaningful impact. I’m dedicated
                  to writing clean, maintainable code and constantly growing my
                  expertise in modern web development.
                </p>
              </div>

              {/* <div className="text-end mt-4">
                <span>[ SINCE. 2022 ]</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION END */}
   

      <div className="divider">
        <hr />
      </div>

   <br></br>
      {/* PROJECT SECTION START */}
      <section id="works" className="portfolio">
        <div className="container">
          <div className="hero-section">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 id="text-work">PROJECTS</h1>
              </div>
              <div className="col-lg-6">
                <span className="section-label">explore</span>
                <br />
              </div>
            </div>
          </div>

          <div className="row portfolio-grid">
            {/* PROJECT 1 */}
            <div className="col-md-6">
              <div className="media" style={{ flex: 1 }}>
                <a
                  href="https://github.com/SwapnilDey-git/InsightFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/Images/Works/insightflow-1.gif`}
                    alt="InsightFlow App"
                    className="portfolio-image"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      filter: "invert(100%)",
                    }}
                  />
                </a>
              </div>
              <div style={{ flex: 1, padding: "20px" }}>
                <h2 className="project-title">INSIGHTFLOW</h2>
                <div className="project-details">
                  <span>DATA ANALYTICS</span>
                  <span>(MOBILE APP)</span>
                  <span>[02]</span>
                </div>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="col-md-6">
              <div className="media" style={{ flex: 1 }}>
                <a
                  href="https://github.com/SwapnilDey-git/InsightFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/Images/Works/insightflow-1.gif`}
                    alt="InsightFlow App"
                    className="portfolio-image"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      filter: "invert(100%)",
                    }}
                  />
                </a>
              </div>
              <div style={{ flex: 1, padding: "20px" }}>
                <h2 className="project-title">INSIGHTFLOW</h2>
                <div className="project-details">
                  <span>DATA ANALYTICS</span>
                  <span>(MOBILE APP)</span>
                  <span>[02]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECT SECTION END */}


      <div className="divider">
        <hr />
      </div>

      <br></br>

      {/* MARQUEE STACKS SECTION START */}
      <section className="marquee-stacks">
        <div className="container">
          <div className="marquee">
            <div className="marquee-content">
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/html-1.svg`}
                alt="HTML Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/css-3.svg`}
                alt="CSS Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/bootstrap-5-1.svg`}
                alt="BOOTSTRAP Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/javascript-1.svg`}
                alt="JavaScript Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/python-5.svg`}
                alt="Python Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/django.svg`}
                alt="Django Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/laravel-2.svg`}
                alt="LARAVEL Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/postgresql.svg`}
                alt="POSTGRESQL Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/docker-4.svg`}
                alt="DOCKER Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/arduino-1.svg`}
                alt="ARDUINO Logo"
                className="logo"
              />
            </div>
            <div className="marquee-content">
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/html-1.svg`}
                alt="HTML Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/css-3.svg`}
                alt="CSS Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/bootstrap-5-1.svg`}
                alt="BOOTSTRAP Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/javascript-1.svg`}
                alt="JavaScript Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/python-5.svg`}
                alt="Python Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/django.svg`}
                alt="Django Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/laravel-2.svg`}
                alt="LARAVEL Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/postgresql.svg`}
                alt="POSTGRESQL Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/docker-4.svg`}
                alt="DOCKER Logo"
                className="logo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/arduino-1.svg`}
                alt=""
                className="logo"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- MARQUEE STACKS SECTION END --> */}
        
      <br></br>
      <div className="divider">
        <hr />
      </div>

      {/* EXPERIENCE SECTION START */}
      <section id="experience" className="experience">
        <div className="container experience-section">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h1 id="text-experience">EXPERIENCE</h1>
              <p className="subtitle">SHOWCASING MY DEVELOPMENT JOURNEY</p>
            </div>
            <span className="section-label">2022 - present</span>
          </div>

          <div className="experience-items">
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>
            <div className="blob blob3"></div>
            <div className="experience-item">
              <div className="grain"></div>

              <div className="row mb-3">
                <div className="col-8 d-flex align-items-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/Images/Experience-Company-Logo/euit-logo1.png`}
                    alt="Google"
                    className="company-logo"
                  />
                  <div>
                    <p className="company-name">Edunet Foundation</p>
                    <h3 className="position-title">AI and Cloud Intern</h3>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <span className="date ms-auto d-none d-md-inline">
                    [ DECEMBER/2024 - JANUARY/2024 ]
                  </span>
                </div>
              </div>
              <p className="description">
                <ul>
                  <li>
                    Internship Training : Successfully attended internship
                    training, receiving commendations for adaptability and
                    problem-solving.
                  </li>
                  <br></br>
                  <li>
                    Version Control : Implemented version control strategies
                    with IBM Cloud improving code collaboration and analytical
                    efficiency by 30% .
                  </li>
                  <br></br>
                  <li>
                    During my online internship, I developed a chatbot using IBM
                    Watsonx Assistant on IBM Cloud and deployed it on WhatsApp
                    via Twilio.
                  </li>
                </ul>
              </p>
            </div>

            {/* <div className="experience-item">
              <div className="grain"></div>

              <div className="row mb-3">
                <div className="col-8 d-flex align-items-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/Images/Experience-Company-Logo/euit-logo1.png`}
                    alt="Google"
                    className="company-logo"
                  />
                  <div>
                    <p className="company-name">AICTE-Eduskills</p>
                    <h3 className="position-title">
                      Fortinet Virtual Internship
                    </h3>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <span className="date ms-auto d-none d-md-inline">
                    [ OCT/2024 - PRESENT ]
                  </span>
                  <span className="small-date d-lg-none me-2">
                    [ OCT/21 - P/T ]
                  </span>
                </div>
              </div>
              <p className="description">
                Developed Python script to automate vulnerability scanning of
                network infrastructure, reducing manual penetration testing time
                by 40 hours per week and improving the team's efficiency in
                identifying weaknesses.
                <br /> - Presented findings on top 3 network vulnerabilities to
                senior leadership, with recommendations to fix the three biggest
                causes of system outages and data breaches, which improved
                system uptime.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      {/* EXPERIENCE SECTION END */}

      <div className="divider">
        <hr />
      </div>

      {/* MEMBERSHIP SECTION START */}
      <section id="membership" className="membership">
        <div className="container membership-section">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h1 id="text-membership">ORGANIZATION</h1>
              <p className="subtitle">
                HIGHLIGHTING MY PROFESSIONAL ASSOCIATIONS
              </p>
            </div>
            <span className="section-label">2024 - present</span>
          </div>

          <div className="membership-items">
            <div className="blob blob1"></div>
            <div className="blob blob2"></div>
            <div className="blob blob3"></div>

            <div className="membership-item">
              <div className="grain"></div>

              <div className="row mb-3">
                <div className="col-8 d-flex align-items-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/Assets/Images/RCPV_logo.png`}
                    alt="IAENG Logo"
                    className="membership-logo"
                  />
                  <div>
                    <p className="membership-name">
                      Rotaract Club of Pune Vibrant Elite[RCPV]
                    </p>
                    <h3 className="membership-title">
                      Position: Professional Development Director
                    </h3>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <span className="date ms-auto d-none d-md-inline">
                    [ JUN/2024 - PRESENT ]
                  </span>
                  <span className="small-date d-lg-none me-2">
                    [ JUN/24 - P/T ]
                  </span>
                </div>
              </div>

              <p className="description" style={{ fontSize: "1.3rem" }}>
                <ul>
                  <li>
                    A dynamic and vibrant community of young professionals
                    committed to make a positive impact on our local and global
                    communities.
                  </li>
                </ul>
                <strong style={{ fontSize: "1.5rem" }}>
                  Membership No: 521072
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* MEMBERSHIP SECTION END */}

      <section className="pattern"></section>

      {/* STACKS SECTION START */}
      <section className="stacks">
        <div className="container stack-section">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h1 id="text-stack" className="stack-header">
                MY SKILLS
              </h1>
              <p className="subtitle">EXPLORE MY CURATED TOP DESIGN PICKS</p>
            </div>
            <span className="section-label">my skill</span>
          </div>

          <div className="stack-items">
            <div className="stack-item">
              <div className="d-flex mb-3">
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/html-1.svg`}
                  alt="Html"
                  className="tool-logo"
                />
                <div>
                  <h3 className="tool-name">HTML</h3>
                  <p className="tool-category">Markup Language</p>
                </div>
                <span className="tool-percentage ms-auto">[ 95% ]</span>
              </div>
              <p className="description">
                HTML is the standard language for creating and structuring
                content on the web, forming the foundation of web pages by
                defining elements like text, images, links, and forms.
              </p>
            </div>

            <div className="stack-item">
              <div className="d-flex mb-3">
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/css-3.svg`}
                  alt="Css"
                  className="tool-logo"
                />
                <div>
                  <h3 className="tool-name">css</h3>
                  <p className="tool-category">style sheet Language</p>
                </div>
                <span className="tool-percentage ms-auto">[ 90% ]</span>
              </div>
              <p className="description">
                CSS is a stylesheet language used to define the presentation of
                HTML elements, enabling the design and layout of web pages with
                styles like colors, fonts, and spacing.
              </p>
            </div>

            <div className="stack-item">
              <div className="d-flex mb-3">
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/bootstrap-5-1.svg`}
                  alt="Bootstrap"
                  className="tool-logo"
                />
                <div>
                  <h3 className="tool-name">Bootstrap</h3>
                  <p className="tool-category">CSS Framework</p>
                </div>
                <span className="tool-percentage ms-auto">[ 95% ]</span>
              </div>
              <p className="description">
                Bootstrap is a popular front-end framework for building
                responsive and mobile-first websites, providing pre-designed
                components and a flexible grid system for faster web
                development.
              </p>
            </div>

            <div className="stack-item">
              <div className="d-flex mb-3">
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/javascript-1.svg`}
                  alt="JavaScript"
                  className="tool-logo"
                />
                <div>
                  <h3 className="tool-name">JavaScript</h3>
                  <p className="tool-category">Scripting Language</p>
                </div>
                <span className="tool-percentage ms-auto">[ 75% ]</span>
              </div>
              <p className="description">
                JavaScript is a versatile programming language that enables
                interactive and dynamic behavior on websites, allowing
                developers to manipulate content, control multimedia, and handle
                events in real-time.
              </p>
            </div>

            <div className="stack-item">
              <div className="d-flex mb-3">
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/python-5.svg`}
                  alt="Python"
                  className="tool-logo"
                />
                <div>
                  <h3 className="tool-name">Python</h3>
                  <p className="tool-category">Programming Language</p>
                </div>
                <span className="tool-percentage ms-auto">[ 92% ]</span>
              </div>
              <p className="description">
                Python is a high-level, versatile programming language known for
                its simplicity and readability, widely used in web development,
                data analysis, artificial intelligence, and automation.
              </p>
            </div>

            <div className="stack-item">
              <div className="d-flex mb-3">
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/django.svg`}
                  alt="django"
                  className="tool-logo"
                />
                <div>
                  <h3 className="tool-name">Django</h3>
                  <p className="tool-category">framework</p>
                </div>
                <span className="tool-percentage ms-auto">[ 85% ]</span>
              </div>
              <p className="description">
                Django is a high-level Python web framework that enables rapid
                development of secure and maintainable web applications,
                providing built-in features like authentication, database
                integration, and admin interfaces.
              </p>
            </div>

            <div className="stack-item">
              <div className="d-flex mb-3">
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/postgresql.svg`}
                  alt="postgresql"
                  className="tool-logo"
                />
                <div>
                  <h3 className="tool-name">postgresql</h3>
                  <p className="tool-category">Database</p>
                </div>
                <span className="tool-percentage ms-auto">[ 85% ]</span>
              </div>
              <p className="description">
                PostgreSQL is a powerful, open-source relational database
                management system that supports advanced data types, complex
                queries, and high concurrency, making it ideal for scalable and
                high-performance applications.
              </p>
            </div>

            <div className="stack-item">
              <div className="d-flex mb-3">
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Images/stack-logos/docker-4.svg`}
                  alt="DOCKER"
                  className="tool-logo"
                />
                <div>
                  <h3 className="tool-name">Docker</h3>
                  <p className="tool-category">Container platform</p>
                </div>
                <span className="tool-percentage ms-auto">[ 65% ]</span>
              </div>
              <p className="description">
                Docker is a platform for developing, shipping, and running
                applications in containers, allowing developers to package
                software with all its dependencies for consistent deployment
                across different environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* STACKS SECTION END */}

      <section className="pattern2"></section>

      {/* CONTACT SECTION START */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-9 text-center">
              <h1 className="main-heading">
                LET'S BUILD A
                <br />
                DIGITAL PRESENCE
              </h1>
              <h6 className="subtitle">
                "LET’S WORK TOGETHER TO DESIGN SOMETHING
                <br />
                TRULY EXCEPTIONAL AND UNIQUE"
              </h6>
              <a href="contact.html" className="contact-btn">
                CONTACT NOW
              </a>
              <div className="social-container">
                <a
                  href="https://github.com/Saloni3494"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Images/Icons/arrow.svg`}
                  alt="arrow"
                />
                <a
                  href="https://www.linkedin.com/in/saloni-tanmor/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </a>
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Images/Icons/arrow.svg`}
                  alt="arrow"
                />
                {/* <a
                  href="https://www.fiverr.com/s/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FIVERR
                </a> */}

                <a
                  href="mailto:saloni.tanmor1@gmail.com"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EMAIL
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src={`${process.env.PUBLIC_URL}/Assets/Images/Icons/process-icon-1.svg`}
                alt="Designer Profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION END */}

      {/* FOOTER SECTION START */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-section">
            <div className="brand-container">
              {/* <div className="brand-text">SALONI</div> */}
              <div className="green-circle"></div>
            </div>

            <div className="container p-0">
              <div className="row footer-row justify-content-between align-items-center">
                <div className="col-auto">
                  <div className="footer-text">© 2025 DESIGN</div>
                </div>
                <div className="col-auto">
                  <div className="footer-text">Pune, Maharashtra </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER SECTION END */}

      {/* Terminal Button Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "3rem 0",
        }}
      >
        <button
          onClick={() => (window.location.href = "terminal.html")}
          style={{
            background: "linear-gradient(90deg, #23272f 0%, #1a1d23 100%)",
            color: "#ffffff",
            border: "none",
            borderRadius: "40px",
            padding: "18px 48px",
            fontSize: "1.3rem",
            fontFamily: "'Space Grotesk', 'Sora', 'Manrope', sans-serif",
            fontWeight: "700",
            letterSpacing: "2px",
            boxShadow: "0 8px 32px rgba(247, 247, 247, 0.15)",
            cursor: "pointer",
            transition: "transform 0.15s, box-shadow 0.15s",
            outline: "none",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.07)";
            e.target.style.boxShadow = "0 12px 40px rgba(0,255,153,0.25)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 8px 32px rgba(0,255,153,0.15)";
          }}
        >
          <span style={{ marginRight: "12px" }}>
            <i className="fa-solid fa-terminal"></i>
          </span>
          Try My Interactive Terminal
          <span style={{ marginLeft: "12px" }}>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>

      {/* Floating Terminal Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "3rem 0",
        }}
      >
        <button
          onClick={() => (window.location.href = "terminal.html")}
          style={{
            background: "linear-gradient(90deg, #ffffff 0%, #f0f0f0 100%)", // Light gradient background
            color: "#000000", // Black text
            border: "none",
            borderRadius: "40px",
            padding: "18px 48px",
            fontSize: "1.3rem",
            fontFamily: "'Space Grotesk', 'Sora', 'Manrope', sans-serif",
            fontWeight: "700",
            letterSpacing: "2px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)", // Lighter shadow
            cursor: "pointer",
            transition: "transform 0.15s, box-shadow 0.15s",
            outline: "none",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.07)";
            e.target.style.boxShadow = "0 12px 40px rgba(0, 153, 255, 0.25)"; // Accent color on hover
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)"; // Lighter shadow
          }}
        >
          <span style={{ marginRight: "12px" }}>
            <i className="fa-solid fa-terminal"></i>
          </span>
          Try My Interactive Terminal
          <span style={{ marginLeft: "12px" }}>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>

      {/* Floating Terminal Button */}
      <div
        id="floating-terminal-btn"
        onClick={() => (window.location.href = "terminal.html")}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50px",
          background: "linear-gradient(90deg, #ffffff 0%, #f0f0f0 100%)", // Light gradient background
          color: "#000000", // Black text
          border: "none",
          borderRadius: "50%",
          padding: "20px",
          fontSize: "1.5rem",
          fontFamily: "'Space Grotesk', 'Sora', 'Manrope', sans-serif",
          fontWeight: "700",
          letterSpacing: "1px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)", // Lighter shadow
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          outline: "none",
          zIndex: "9999",
          animation: "pulse 2s infinite",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.2)";
          e.target.style.boxShadow = "0 12px 40px rgba(0, 153, 255, 0.25)"; // Accent color on hover
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)"; // Lighter shadow
        }}
      >
        <i className="fa-solid fa-terminal" style={{ color: "#000000" }}></i>{" "}
        {/* Black icon */}
        <span style={{ color: "#000000" }}>Terminal</span> {/* Black text */}
      </div>

      {/* Add CSS Animation */}
      <style>
        {`
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); /* Lighter shadow */
      }
      50% {
        transform: scale(1.1);
        box-shadow: 0 12px 40px rgba(0, 153, 255, 0.25); /* Accent color shadow */
      }
      100% {
        transform: scale(1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); /* Lighter shadow */
      }
    }
  `}
      </style>
    </div>
  );
}

export default Home;
