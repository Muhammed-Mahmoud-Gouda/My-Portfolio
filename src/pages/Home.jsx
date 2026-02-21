import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="particles-background">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle-dot"
            style={{
              "--x": `${Math.random() * 100}%`,
              "--y": `${Math.random() * 100}%`,
              "--size": `${Math.random() * 3 + 1}px`,
              "--delay": `${Math.random() * 25}s`,
              "--duration": `${Math.random() * 6 + 8}s`,
            }}
          />
        ))}
      </div>

      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-greeting">
            Hi, I'm <span className="gradient-text">Muhammed Mahmoud</span>
          </h1>

          <h2 className="hero-title">
            Software Engineer | .NET Developer | Full Stack
          </h2>

          <p className="hero-description">
            Passionate developer with expertise in building scalable .NET
            applications, implementing modern architectural patterns, and
            delivering high-quality solutions through research-driven
            problem-solving and continuous learning.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Muhammed_Mahmoud_CV.pdf";
                link.download = "Muhammed_Mahmoud_CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <i className="fas fa-download"></i>
              View My CV
            </button>

            <button
              className="btn-secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
          </div>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/muhammad-mahmoud-gouda"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Muhammed-Mahmoud-Gouda"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
