import { motion } from "framer-motion";
import "./Education.css";

const Education = () => {
  const education = {
    university: "Zagazig University",
    degree: "Bachelor's Degree in Computer Science",
    period: "Sep 2023 - Present",
    location: "Zagazig, Egypt",
    description:
      "Currently pursuing my Bachelor's degree in Computer Science, focusing on software engineering, algorithms, data structures, and modern development practices. Building a strong foundation in both theoretical concepts and practical applications.",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Web Development",
      "Software Engineering",
      "Operating Systems",
    ],
  };

  return (
    <section className="education" id="education">
      <div className="education-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="education-header">
            <div className="education-info">
              <h3 className="university-name">{education.university}</h3>
              <p className="degree">{education.degree}</p>
              <div className="education-meta">
                <span className="period">{education.period}</span>
                <span className="meta-separator">|</span>
                <span className="location">{education.location}</span>
              </div>
            </div>
          </div>

          <p className="education-description">{education.description}</p>

          <div className="courses-section">
            <h4 className="courses-title">Relevant Coursework</h4>
            <ul className="courses-list">
              {education.relevantCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
