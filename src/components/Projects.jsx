import "../index.css";
import AccessAbility from "../assets/AccessAbility.png";
import Memory from "../assets/Memory.jpeg";
import Pafong from "../assets/Paföng.jpeg";
import Undead from "../assets/Undead.jpeg";
import Dora from "../assets/Dora.jpeg";

const projects = [
  {
    id: 1,
    title: "Website - AccessAbility",
    category: "User-Centered Development",
    description:
      "Designing and implementing a website for students to learn about taking into account accessibility when coding. It can be reached at https://accessability.pages.dev/glossar",
    tags: [
      "Conception",
      "User Research",
      "Implementing",
      "Accessibility",
      "HTML",
      "CSS",
      "React",
    ],
    image: AccessAbility,
    badgeClass: "badge-ux",
  },
  {
    id: 2,
    title: "Game - Memorize Together ",
    category: "Development",
    description:
      "Group-Project, developing a memory game about accessibility. Process with conception, prototyping, implementing and evaluating using basic scrum processes.",
    tags: ["Unreal Engine", "Labor division", "Game", "Evaluation", "Scrum"],
    image: Memory,
    badgeClass: "badge-dev",
  },
  {
    id: 3,
    title: "Concept - Paföng",
    category: "Concept + Prototype",
    description:
      "A group-project using the User-Centered approach. Concept and prototyping of an interactive perfume smartphone application.",
    tags: ["React Native", "User Centered", "Labor division"],
    image: Pafong,
    badgeClass: "badge-ux",
  },
  {
    id: 4,
    title: "Game - Undead Power Struggle",
    category: "Development",
    description:
      "A group-project with the goal of implementing a game based on the game Kingdom Builders with modification. In addition Scrum processes and ongoing documentation were used to reach the goal.",
    tags: ["Java", "Game", "Labor Division", "Documentation", "Scrum"],
    image: Undead,
    badgeClass: "badge-dev",
  },
  {
    id: 5,
    title: "Concept - Dora",
    category: "Concept + Prototype",
    description:
      "As a group a Prototype of a website was developed that functioned as a tool for lists, such as places to visit or games to play ",
    tags: ["Figma", "Documentation", "Labor Division"],
    image: Dora,
    badgeClass: "badge-ux",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-header-centered">
        <h2 className="experience-title">Featured Projects</h2>
        <p className="about-subtitle">
          A selection of my recent work in UX design and software development.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card-new">
            <div className="project-img-container">
              <img src={project.image} alt={project.title} />
              <span className={`project-badge ${project.badgeClass}`}>
                {project.category}
              </span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
