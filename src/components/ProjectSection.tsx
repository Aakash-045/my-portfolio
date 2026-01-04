import { useState } from "react";
import { projectsData } from "../constant";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projectsData.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev < total - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const project = projectsData[activeIndex];

  return (
    <>
      <style>
        {`
          .about-wrapper {
            display: grid;
            place-items: center;
          }

          .about-title {
            color: #ffffff;
            text-align: center;
            margin-bottom: 25px;
            font-size: 36px;
          }

          .about-card {
            width: 750px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 12px;
            padding: 30px 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            margin-bottom: 20px;
          }

          /* 🔥 Transition */
          .card-transition {
            animation: fadeSlide 0.4s ease-in-out;
          }

          @keyframes fadeSlide {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .about-list {
            color: #ffffff;
            font-size: 18px;
            line-height: 1.8;
            padding-left: 20px;
          }

          .about-list ol {
            margin-top: 10px;
            padding-left: 20px;
          }

          .nav-buttons {
            display: flex;
            gap: 20px;
            margin-top: 10px;
          }

          .nav-btn {
            background: rgba(0,0,0,0.6);
            color: #fff;
            border: 1px solid #fff;
            padding: 8px 20px;
            cursor: pointer;
            border-radius: 6px;
            font-size: 16px;
          }

          .nav-btn:disabled {
            opacity: 0.4;
            cursor: not-allowed;
          }
        `}
      </style>

      <div className="about-wrapper">
        <h1 className="about-title">Projects</h1>

        <div className="about-card card-transition" key={activeIndex}>
          <ul className="about-list">
            <li>
              <strong>{project.title}</strong>
              {project.duration && <span> ({project.duration})</span>}
              <br />
            </li>

            <ol>
              {project.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ol>
          </ul>
        </div>

        <div className="nav-buttons">
          <button
            className="nav-btn"
            onClick={handlePrev}
            disabled={activeIndex === 0}
          >
            Previous
          </button>

          <button
            className="nav-btn"
            onClick={handleNext}
            disabled={activeIndex === total - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
