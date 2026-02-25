import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const program = {
    title: "Full Stack .NET Web Developer",
    provider: "DEPI Program",
    description:
      "Completed an intensive software development program rooted in .NET technologies, building a solid foundation for data-driven applications. Gained strong back-end development skills with C# and full-stack capability through HTML5, JavaScript, and CSS3.",
    courses: [
      "Prompt Engineering",
      "Introduction to SQL Server Programming",
      "Getting Started with Git and GitHub",
      "Programming in C#",
      "Programming in HTML5, JavaScript & CSS3",
      "Functional Documentation & Unit Testing",
      "Containerization basics using Docker",
      ".NET Core Web API",
      "Developing .NET Core MVC Web Applications",
      "Capstone Project",
    ],
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="experience-header">
            <div className="experience-info">
              <h3 className="experience-title">
                {program.title}
                <span className="experience-at"> @ {program.provider}</span>
              </h3>
            </div>
          </div>

          <p className="experience-description">{program.description}</p>

          <div className="modules-section">
            <h4 className="modules-title">Completed Modules</h4>
            <ul className="modules-list">
              {program.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
