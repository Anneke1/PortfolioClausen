import "../index.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Anneke</h3>
            <p>UX Designer & Developer</p>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/anneke-clausen-8724a939b/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="clausenanneke@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Anneke Clausen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
