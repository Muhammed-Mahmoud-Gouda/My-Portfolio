import "./Education.css";

const Education = () => {
  const education = {
    university: "Zagazig University",
    degree: "Bachelor's Degree in Computer Science",
    period: "Sep 2023 – Present",
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
    <div className="education" id="education">
      <div className="education-particles">
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

      <div className="education-container">
        <h1 className="section-title">Education</h1>

        <div className="education-card">
          <div className="education-header">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-info">
              <h2 className="university-name">{education.university}</h2>
              <p className="degree">{education.degree}</p>
              <div className="education-meta">
                <span className="period">
                  <i className="fas fa-calendar-alt"></i>
                  {education.period}
                </span>
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  {education.location}
                </span>
              </div>
            </div>
          </div>

          <p className="education-description">{education.description}</p>

          <div className="courses-section">
            <h3 className="courses-title">Relevant Coursework</h3>
            <div className="courses-list">
              {education.relevantCourses.map((course, index) => (
                <span key={index} className="course-tag">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
