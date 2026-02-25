import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "Building scalable and modern web applications using .NET Core, ASP.NET, and modern frontend technologies like React.",
    },
    {
      icon: "fas fa-server",
      title: "Backend Development",
      description:
        "Designing and implementing robust RESTful APIs and microservices architecture with C#, .NET Core, and SQL Server.",
    },
    {
      icon: "fas fa-database",
      title: "Database Design",
      description:
        "Creating efficient database schemas, optimizing queries, and implementing best practices with SQL Server and Entity Framework.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Full Stack Solutions",
      description:
        "End-to-end development from database design to frontend implementation, ensuring seamless integration and optimal performance.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "API Development",
      description:
        "Developing secure and scalable Web APIs with authentication, authorization, and best practices for modern application architecture.",
    },
    {
      icon: "fas fa-cogs",
      title: "System Architecture",
      description:
        "Designing clean, maintainable, and scalable software architecture using design patterns, SOLID principles, and industry best practices.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          What I Do
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
