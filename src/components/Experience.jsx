import "../index.css";
import { HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi2";

const Experience = () => {
  const jobs = [
    {
      title: "Working Student - Quality Engineer",
      company: "QDA Solutions - Germanedge",
      period: "January 2024 - November 2024",
      description:
        "Supporting the quality engineering team in ensuring product and process quality.",
      bullets: [
        "Tested existing and newly developed code to ensure quality and functionality",
        "Collaborated closely with developers both on-site and remotely",
        "Actively participated in Scrum ceremonies (Sprint Planning, Reviews, Retrospectives, Daily Stand-ups)",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <h2 className="experience-title">Work Experience</h2>
        <div className="title-underline-center"></div>
        <p className="experience-subtitle">
          My professional journey over the last years.
        </p>
      </div>

      <div className="experience-container">
        {jobs.map((job, index) => (
          <div key={index} className="experience-card">
            <div className="exp-card-header">
              <div className="exp-title-group">
                <div className="exp-icon-box">
                  <HiOutlineBriefcase />
                </div>
                <div>
                  <h3>{job.title}</h3>
                  <span className="exp-company">{job.company}</span>
                </div>
              </div>
              <div className="exp-date-badge">
                <HiOutlineCalendar />
                <span>{job.period}</span>
              </div>
            </div>

            <p className="exp-description">{job.description}</p>

            <ul className="exp-bullets">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
