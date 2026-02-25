import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const skills = [
    "C#",
    "ASP.NET Core",
    "Entity Framework",
    "SQL Server",
    "JavaScript",
    "React",
    "Web API",
    "Docker",
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p>
              {"I'm a Software Engineer and .NET Developer focused on building scalable APIs and robust backends using C#, ASP.NET Core, and modern architectural patterns. I value clean code, performance, and secure, maintainable systems."}
            </p>
            <p>
              {"I enjoy collaborating in teams, applying research-driven problem solving, and continuously learning. Recently, I have optimized APIs with LINQ, middleware, Dependency Injection, and caching to deliver measurable impact."}
            </p>
            <p>
              {"Here are a few technologies I've been working with recently:"}
            </p>

            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <img
                src="/MyPhoto.jpeg"
                alt="Muhammed Mahmoud"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x300/112240/64ffda?text=MM";
                }}
              />
              <div className="image-border"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
