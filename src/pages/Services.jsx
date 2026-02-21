import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "Building scalable and modern web applications using .NET Core, ASP.NET, and modern frontend technologies like React and Angular.",
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
        "Creating efficient database schemas, optimizing queries, and implementing best practices for data management with SQL Server and Entity Framework.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Full Stack Solutions",
      description:
        "End-to-end development services from database design to frontend implementation, ensuring seamless integration and optimal performance.",
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
    <div className="services" id="services">
      <div className="services-particles">
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

      <div className="services-container">
        <h1 className="section-title">My Services</h1>
        <p className="section-subtitle">
          Professional solutions tailored to meet your business needs
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
