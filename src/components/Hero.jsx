import "../index.css";
import profilBild from "../assets/Platzhalter.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-text-side">
        <h1 className="hero-name">Anneke</h1>
        <h1 className="hero-name">Clausen</h1>
        <p className="hero-title">Ambitious Developer & Designer</p>
        <p className="hero-description">
          Passionate developer and avid designer. Currently based in Vienna, I
          strive to learn and improve.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>
        <div className="hero-social-icons">
          <a
            href="https://www.linkedin.com/in/anneke-clausen-8724a939b/"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <FaLinkedinIn />
          </a>
          <a href="mailto:clausenanneke@gmail.com" className="icon-link">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="hero-image-side">
        <img src={profilBild} alt="Anneke" className="hero-full-img" />
      </div>
    </section>
  );
};

export default Hero;
