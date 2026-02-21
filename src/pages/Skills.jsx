import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Back-End Development",
      skills: [
        { name: "C#", icon: "fab fa-microsoft" },
        { name: "OOP", icon: "fas fa-code" },
        { name: "ASP.NET Core", icon: "fas fa-layer-group" },
        { name: ".NET Framework", icon: "fas fa-dot-circle" },
        { name: "Entity Framework", icon: "fas fa-database" },
        { name: "SQL Server", icon: "fas fa-server" },
        { name: "Web API", icon: "fas fa-plug" },
        { name: "LINQ", icon: "fas fa-search" },
      ],
    },
    {
      category: "Front-End Development",
      skills: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "React", icon: "fab fa-react" },
        { name: "Responsive Design", icon: "fas fa-mobile-alt" },
        { name: "Bootstrap", icon: "fab fa-bootstrap" },
        { name: "Tailwind CSS", icon: "fas fa-wind" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Visual Studio", icon: "fas fa-window-maximize" },
        { name: "VS Code", icon: "fas fa-code" },
        { name: "GitHub", icon: "fab fa-github" },
        { name: "Postman", icon: "fas fa-paper-plane" },
        { name: "Azure DevOps", icon: "fab fa-microsoft" },
        { name: "Docker", icon: "fab fa-docker" },
      ],
    },
  ];

  return (
    <div className="skills" id="skills">
      <div className="skills-particles">
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

      <div className="skills-container">
        <h1 className="skills-title">
          My <span className="gradient-text">Skills</span>
        </h1>
        <p className="skills-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>
        <div className="skills-divider"></div>

        <div className="skills-categories">
          {skillsData.map((category, index) => (
            <div
              key={category.category}
              className="skill-category"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h2 className="category-title">{category.category}</h2>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="skill-tag"
                    style={{
                      animationDelay: `${index * 0.2 + skillIndex * 0.05}s`,
                    }}
                  >
                    <i className={`skill-icon ${skill.icon}`}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
