import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "ATM System",
      description:
        "Developed a fully functional ATM System in C++ using strong OOP principles, featuring secure login (3 attempts limit) and file-based data storage. Implemented core banking operations including Withdraw, Deposit, Balance Check, PIN Change, Transaction History, and Logout with full input validation.",
      link: "https://github.com/Muhammed-Mahmoud-Gouda/ATM-System",
      technologies: ["C++", "OOP", "File System"],
      icon: "fas fa-credit-card",
    },
    {
      id: 2,
      name: "Bank System",
      description:
        "Developed a fully functional Bank Management System in C++ using OOP principles with secure login (3-attempt limit) and file-based data persistence. Implemented core banking operations including client management, deposit, withdrawal, balance inquiry, and transaction history.",
      link: "https://github.com/Muhammed-Mahmoud-Gouda/Bank-System",
      technologies: ["C++", "OOP", "File System"],
      icon: "fas fa-university",
    },
    {
      id: 3,
      name: "Pizza Palace",
      description:
        "Built a Pizza Ordering Desktop App using C# and WinForms (.NET Framework) that allows users to customize pizza size, toppings, crust type, and dining option through an interactive UI. The app provides real-time order summary and automatic price calculation.",
      link: "https://github.com/Muhammed-Mahmoud-Gouda/Pizza-Palace",
      technologies: ["C#", "WinForms", ".NET Framework"],
      icon: "fas fa-pizza-slice",
    },
  ];

  return (
    <div className="projects" id="projects">
      <div className="projects-particles">
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

      <div className="projects-container">
        <h1 className="section-title">My Projects</h1>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <i className={project.icon}></i>
                </div>
                <h3 className="project-name">{project.name}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="fab fa-github"></i>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
