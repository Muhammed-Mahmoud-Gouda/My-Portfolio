import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "ATM System",
      description:
        "A fully functional ATM System built with strong OOP principles, featuring secure login with a 3-attempt limit and file-based data storage. Implements core banking operations including Withdraw, Deposit, Balance Check, PIN Change, Transaction History, and Logout with full input validation.",
      link: "https://github.com/Muhammed-Mahmoud-Gouda/ATM-System",
      technologies: ["C++", "OOP", "File System", "Data Persistence"],
      image: "/projects/atm-system.jpg",
    },
    {
      id: 2,
      name: "Bank System",
      description:
        "A comprehensive Bank Management System using OOP principles with secure login and file-based data persistence. Features include complete client management, deposit and withdrawal operations, balance inquiry, and detailed transaction history with robust error handling.",
      link: "https://github.com/Muhammed-Mahmoud-Gouda/Bank-System",
      technologies: ["C++", "OOP", "File I/O", "CRUD Operations"],
      image: "/projects/bank-system.jpg",
    },
    {
      id: 3,
      name: "Pizza Palace",
      description:
        "A Pizza Ordering Desktop Application using C# and WinForms that allows users to customize pizza size, toppings, crust type, and dining option through an interactive UI. Features real-time order summary and automatic price calculation with a polished user experience.",
      link: "https://github.com/Muhammed-Mahmoud-Gouda/Pizza-Palace",
      technologies: ["C#", "WinForms", ".NET Framework", "Desktop App"],
      image: "/projects/pizza-palace.jpg",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Some Things I{"'"}ve Built
        </motion.h2>

        <div className="featured-projects">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`featured-project ${index % 2 !== 0 ? "reverse" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="project-image">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-image-link"
                >
                  <div className="project-image-overlay"></div>
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="project-content">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </a>
                </h3>
                <div className="project-description-card">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-icon"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
