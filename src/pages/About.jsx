import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle-dot"
            style={{
              "--x": `${Math.random() * 100}%`,
              "--y": `${Math.random() * 100}%`,
              "--size": `${Math.random() * 3 + 1}px`,
              "--delay": `${Math.random() * 5}s`,
              "--duration": `${Math.random() * 6 + 8}s`,
            }}
          />
        ))}
      </div>

      <div className="about-container">
        <h1 className="section-title">About Me</h1>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img
                src="/MyPhoto.jpeg"
                alt="Muhammed Mahmoud"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x300/1e293b/60a5fa?text=MM";
                }}
              />
            </div>
          </div>

          <div className="about-text">
            <h2 className="about-subtitle">Who I Am</h2>
            <p>
              I'm a Software Engineer and .NET Developer focused on building
              scalable APIs and robust backends using C#, ASP.NET Core, and
              modern architectural patterns. I value clean code, performance,
              and secure, maintainable systems.
            </p>
            <p>
              I enjoy collaborating in teams, applying research-driven problem
              solving, and continuously learning. Recently, I have optimized
              APIs with LINQ, middleware, Dependency Injection, and caching to
              deliver measurable impact.
            </p>

            <div className="contact-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Cairo, Egypt</span>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:muhammedmahmoudgoda66@gmail.com">
                  muhammedmahmoudgoda66@gmail.com
                </a>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <span>+20 1064665247</span>
              </div>
              <div className="info-item">
                <i className="fab fa-linkedin"></i>
                <a
                  href="https://www.linkedin.com/in/muhammad-mahmoud-gouda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="info-item">
                <i className="fab fa-github"></i>
                <a
                  href="https://github.com/Muhammed-Mahmoud-Gouda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
