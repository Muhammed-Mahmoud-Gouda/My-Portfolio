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
      <div className="footer-social-sidebar">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>

      <div className="footer-email-sidebar">
        <a href="mailto:muhammedmahmoudgoda66@gmail.com">
          muhammedmahmoudgoda66@gmail.com
        </a>
      </div>

      <div className="footer-content">
        <a
          href="https://github.com/Muhammed-Mahmoud-Gouda"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credit"
        >
          <p>Built by Muhammed Mahmoud</p>
          <p className="footer-year">
            {"© "}{currentYear}
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
