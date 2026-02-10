import "../index.css";
import { HiOutlineAcademicCap, HiOutlineCheckBadge } from "react-icons/hi2";

const Certificates = () => {
  const credentials = [
    {
      title: "Bachelor of Science",
      institution: "Universität zu Lübeck",
      date: "2022 - 2025",
      description: "Bachelor in Medieninformatik (Media Informatics)",
      type: "degree",
    },
    {
      title: "Master of Science",
      institution: "TU Wien",
      date: "2026 - expected 2028",
      description: "Master in Media and Human Centered Computing",
      type: "degree",
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="section-header-centered">
        <h2 className="experience-title">Education & Certificates</h2>
        <div className="title-underline-center"></div>
        <p className="experience-subtitle">
          My educational journey both in Germany and in Austria.
        </p>
      </div>

      <div className="experience-container">
        {credentials.map((item, index) => (
          <div key={index} className="experience-card">
            <div className="exp-card-header">
              <div className="exp-title-group">
                <div className="exp-icon-box">
                  {item.type === "degree" ? (
                    <HiOutlineAcademicCap />
                  ) : (
                    <HiOutlineCheckBadge />
                  )}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <span className="exp-company">{item.institution}</span>
                </div>
              </div>
              <div className="exp-date-badge">
                <span>{item.date}</span>
              </div>
            </div>
            <p className="exp-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
