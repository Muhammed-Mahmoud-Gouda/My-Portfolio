import "./Experience.css";

const Experience = () => {
  const program = {
    title: "Software Development - Full Stack .NET Web Developer",
    provider: "DEPI Program",
    description:
      "Rooted in .NET technologies, this profile reflects a solid foundation for data-driven applications. With a strong grasp of C#, the candidate is equipped with robust back-end development. Front-end proficiency is ensured through HTML5, JavaScript, and CSS3, creating a full-stack capability.",
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
    <div className="experience" id="experience">
      <div className="experience-particles">
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

      <div className="experience-container">
        <h1 className="section-title">Experience</h1>

        <div className="program-card">
          <div className="program-header">
            <div className="program-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="program-info">
              <h2 className="program-title">{program.title}</h2>
              <div className="program-provider">
                <i className="fas fa-certificate"></i>
                {program.provider}
              </div>
            </div>
          </div>

          <div className="program-description">
            <p>{program.description}</p>
          </div>

          <div className="courses-section">
            <div className="courses-header">
              <i className="fas fa-book-open"></i>
              <h3>Courses</h3>
            </div>
            <div className="courses-list">
              {program.courses.map((course, index) => (
                <div key={index} className="course-item">
                  <div className="course-number">{index + 1}</div>
                  <div className="course-name">{course}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
