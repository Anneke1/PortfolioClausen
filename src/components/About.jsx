import "../index.css";
import { HiOutlinePaintBrush } from "react-icons/hi2"; // Palette
import { HiOutlineCodeBracket } from "react-icons/hi2"; // Code
import { HiOutlineBolt } from "react-icons/hi2"; // Blitz

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">
          I'm a designer and developer with a passion for creating seamless
          digital experiences. With experience in both UX design and
          programming, I bring a unique perspective to every project.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <HiOutlinePaintBrush className="about-icon" />
          <h3>UX/UI Design </h3>
          <p>
            My creative abilities and tools like Figma or Sketching enable me to
            focus on User-Centered approaches. Also experience in User-Studies
            can be helpful to evaluate an idea/concept/prototype or product.
          </p>
        </div>

        <div className="about-card">
          <HiOutlineCodeBracket className="about-icon" />
          <h3>Development</h3>
          <p>
            Experience in varying programming languages such as HTML, CSS, Java
            and more. Being a logic thinker also helps building the theorectical
            base before coding.
          </p>
        </div>

        <div className="about-card">
          <HiOutlineBolt className="about-icon" />
          <h3>Prototyping</h3>
          <p>
            Iterating from concept to working prototype, bridging design and
            development. Mostly using interactive prototyping in Figma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
