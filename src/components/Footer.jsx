import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/Muhammed-Mahmoud-Gouda",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/muhammad-mahmoud-gouda",
    },
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:muhammedmahmoudgoda66@gmail.com",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="footer-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.4 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <h3 className="footer-title">
              Muhammed Mahmoud
              <span className="title-dot">.</span>
            </h3>
            <p className="footer-description">
              .NET Developer passionate about creating amazing web experiences
              with modern technologies.
            </p>

            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="bottom-content">
            <p className="copyright">&copy; {currentYear} Muhammed Mahmoud</p>
            <div className="bottom-divider"></div>
            <p className="made-with">
              Built with <i className="fas fa-heart"></i> using React & .NET
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
