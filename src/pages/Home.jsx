import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          Muhammed Mahmoud.
        </motion.h1>

        <motion.h2
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          I'm a software engineer specializing in building scalable .NET applications,
          implementing modern architectural patterns, and delivering high-quality full-stack
          solutions. Currently focused on building robust APIs and backend systems
          with <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer">ASP.NET Core</a>.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        >
          <a
            href="#projects"
            className="cta-button"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Check out my work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
