import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Back-End",
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
      category: "Front-End",
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
      category: "Tools",
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
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-categories">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-tags">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-tag">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
