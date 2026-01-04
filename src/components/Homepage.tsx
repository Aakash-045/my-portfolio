import { useState } from "react";
import HomepageSection from "./HomepageSection";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState<
    "about" | "contact" | "projects" | "careers" | null
  >(null);

  const showProjects = () => {
    setActiveSection("projects");
  };
  const showCareers = () => {
    setActiveSection("careers");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Aakash_Resume.pdf"; // public folder path
    link.download = "Aakash_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            height: 50px;
            border-bottom: 2px solid #ffffff;
            align-items: center;
            justify-content: space-between;
          }

          .logo {
            margin-left: 20px;
            color: white;
          }

          .nav-list {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-right: 20px;
            padding: 0;
          }

          .nav-item {
            margin-left: 20px;
            list-style: none;
            color: white;
            cursor: pointer;
          }

          .nav-item:hover {
            text-decoration: underline;
          }

          .nav-button {
            margin-left: 10px;
            padding: 7px;
            border: 2px solid #ffffff;
            border-radius: 20px;
            background-color:transparent;
            color: #ffffff;
            cursor: pointer;
            font-size: 13px;
            &:hover {
              background-color: #FA8128;
              color: #000000;
            }
          }
        `}
      </style>

      <div className="navbar">
        <div>
          <p className="logo">
            Web Developer | Solutions Engineer | Integration Specialist
          </p>
        </div>

        <ul className="nav-list">
          <li className="nav-item" onClick={showProjects}>
            View Projects
          </li>
          <li className="nav-item" onClick={showCareers}>
            Career
          </li>
          <button className="nav-button" onClick={handleDownloadCV}>
            Download CV
          </button>
        </ul>
      </div>

      <HomepageSection
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </>
  );
};

export default Homepage;
