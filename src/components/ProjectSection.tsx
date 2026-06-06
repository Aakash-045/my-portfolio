import { useState } from "react";
import { projectsData } from "../constant";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const total = projectsData.length;

  const handleNext = () => {
    if (activeIndex < total - 1) {
      setDirection("right");
      setActiveIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection("left");
      setActiveIndex((prev) => prev - 1);
    }
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

          @keyframes slideInFromRight {
            from { opacity: 0; transform: translateX(60px); }
            to   { opacity: 1; transform: translateX(0); }
          }

          @keyframes slideInFromLeft {
            from { opacity: 0; transform: translateX(-60px); }
            to   { opacity: 1; transform: translateX(0); }
          }

          .card-slide-right {
            animation: slideInFromRight 0.4s ease-in-out;
          }

          .card-slide-left {
            animation: slideInFromLeft 0.4s ease-in-out;
          }

          .dot-nav {
            display: flex;
            gap: 12px;
            margin-top: 4px;
            margin-bottom: 20px;
            justify-content: center;
          }

          .dot {
            width: 11px;
            height: 11px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.25);
            border: none;
            cursor: pointer;
            padding: 0;
            transition: background 0.3s ease, transform 0.3s ease,
                        box-shadow 0.3s ease;
          }

          .dot.active {
            background: #0077ff;
            transform: scale(1.35);
            box-shadow: 0 0 0 3px rgba(0, 119, 255, 0.30);
          }

          .dot:hover:not(.active) {
            background: rgba(255, 255, 255, 0.55);
            transform: scale(1.1);
          }
        `}
      </style>

      <div className="about-wrapper">
        <h1 className="about-title">Projects</h1>

        <div
          className={`about-card ${direction === "right" ? "card-slide-right" : "card-slide-left"}`}
          key={`${activeIndex}-${direction}`}
        >
          <ul className="about-list">
            <li>
              <strong>{project.title}</strong>
              {project.duration && <span> ({project.duration})</span>}
            </li>
            <ol>
              {project.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ol>
          </ul>
        </div>

        <div className="dot-nav">
          {projectsData.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => {
                if (i === activeIndex) return;
                setDirection(i > activeIndex ? "right" : "left");
                setActiveIndex(i);
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
