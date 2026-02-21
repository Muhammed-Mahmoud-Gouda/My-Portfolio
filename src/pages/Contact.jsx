import { useState } from "react";
import Button from "../components/Button";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! I will get back to you soon.",
      );
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/Muhammed-Mahmoud-Gouda",
      color: "#60a5fa",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/muhammad-mahmoud-gouda",
      color: "#60a5fa",
    },
    {
      name: "Email",
      icon: "fas fa-envelope",
      url: "mailto:muhammedmahmoudgoda66@gmail.com",
      color: "#60a5fa",
    },
  ];

  return (
    <div className="contact" id="contact">
      <div className="contact-particles">
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

      <div className="contact-glow"></div>

      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="contact-subtitle">
            Have a question or want to work together? Let's create something
            amazing.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="info-title">Let's talk about everything!</h3>
            <p className="info-description">
              Don't like forms? Send me an email or connect with me on social
              media. I'm always open to discussing new projects, creative ideas
              or opportunities.
            </p>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ "--hover-color": social.color }}
                  >
                    <i className={social.icon}></i>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-details">
              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="detail-content">
                  <h4>Email</h4>
                  <p>muhammedmahmoudgoda66@gmail.com</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="detail-content">
                  <h4>Location</h4>
                  <p>Egypt</p>
                </div>
              </div>

              <div className="detail-card">
                <div className="detail-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="detail-content">
                  <h4>Availability</h4>
                  <p>Open for freelance</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Send me a message</h3>
              <p>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                <i className="fas fa-tag"></i>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment-alt"></i>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </>
              )}
            </Button>

            {submitMessage && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
