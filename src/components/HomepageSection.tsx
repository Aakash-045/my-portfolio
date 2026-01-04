import img from "../assets/background.jpg";
import AboutSection from "./About";
import Careers from "./CareerSection";
import Contact from "./ContactSection";
import Projects from "./ProjectSection";

const HomepageSection = (props: any) => {
  const { activeSection, setActiveSection } = props;

  const frontendSkills = ["React", "HTML", "CSS", "JavaScript"];
  const backendSkills = ["Node", "Express", "MongoDB"];
  const otherSkills = ["Integration", "OAuth2", "Authentication", "SDK"];

  const renderSkills = (skills: string[], startIndex = 0) =>
    skills.map((skill, index) => (
      <span
        key={skill}
        className="skill-chip"
        style={{ animationDelay: `${(startIndex + index) * 0.08}s` }}
      >
        {skill}
      </span>
    ));

  return (
    <>
      <style>
        {`
        .home-section {
          display: flex;
          align-items: center;
          margin-top: 100px;
          gap: 20px;
        }

        .text-container {
          width: 50%;
          margin-top: 30px;
          margin-right: 10%;
        }

        .description {
          font-size: 20px;
          color: white;
          margin-left: 20px;
          line-height: 1.6;
        }

        .image-container {
          width: 50%;
          display: flex;
          justify-content: center;
        }

        .profile-image {
          height: 300px;
          width: 500px;
          object-fit: cover;
          border-radius: 12px;
        }

        /* 🔥 Skills Section */
        .skills-wrapper {
          margin-left: 20px;
          margin-top: 25px;
        }

        .skills-title {
          color: #fff;
          margin-bottom: 12px;
        }

        .skills-subtitle {
          color: #b3d4ff;
          margin: 18px 0 8px;
          font-size: 16px;
        }

        .skills-group {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .skill-chip {
          padding: 10px 16px;
          border: 1.5px solid #ffffffaa;
          border-radius: 20px;
          color: white;
          font-size: 14px;
          opacity: 0;
          transform: translateY(20px);
          animation: chipFadeUp 0.6s ease forwards;
          background: rgba(255,255,255,0.05);
          transition: all 0.3s ease;
        }

        .skill-chip:hover {
          background: #0077ff;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0,119,255,0.4);
          cursor: pointer;
        }

        @keyframes chipFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .know-more {
          margin-top: 30px;
          margin-left: 20px;
          padding: 10px 20px;
          border-radius: 6px;
          background-color: #0077ff;
          color: white;
          font-size: 16px;
          cursor: pointer;
          border: none;
          margin-right: 10px;
        }

        .know-more:hover {
          background-color: #005fd1;
        }

        .section-wrapper {
          margin-top: 60px;
          animation: fadeSlideUp 0.7s ease forwards;
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>

      <div className="home-section">
        <div className="text-container">
          <p className="description">
            Hello, my name is <b>Aakash M</b>, <br />I am a{" "}
            <b>Web Developer & Solutions Engineer</b> passionate about building
            scalable applications and integrations.
          </p>

          {/* 🔥 Skills Segregation */}
          <div className="skills-wrapper">
            <h3 className="skills-title">Skills</h3>

            <h4 className="skills-subtitle">Frontend</h4>
            <div className="skills-group">
              {renderSkills(frontendSkills, 0)}
            </div>

            <h4 className="skills-subtitle">Backend</h4>
            <div className="skills-group">
              {renderSkills(backendSkills, frontendSkills.length)}
            </div>

            <h4 className="skills-subtitle">Integrations & Others</h4>
            <div className="skills-group">
              {renderSkills(
                otherSkills,
                frontendSkills.length + backendSkills.length
              )}
            </div>
          </div>

          <button
            className="know-more"
            onClick={() => setActiveSection("about")}
          >
            Get to Know Me
          </button>
          <button
            className="know-more"
            onClick={() => setActiveSection("contact")}
          >
            Get In Touch
          </button>
        </div>

        <div className="image-container">
          <img src={img} alt="profile" className="profile-image" />
        </div>
      </div>

      {activeSection && (
        <div className="section-wrapper">
          {activeSection === "about" && <AboutSection />}
          {activeSection === "contact" && <Contact />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "careers" && <Careers />}
        </div>
      )}
    </>
  );
};

export default HomepageSection;
