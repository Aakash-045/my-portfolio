import { useState } from "react";
import { careersData } from "../constant";

const Careers = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setExpandedIndex((prev) => (prev === i ? null : i));
  };

  return (
    <>
      <style>
        {`
          .career-wrapper {
            display: grid;
            place-items: center;
            padding: 40px 20px;
          }

          .career-section-title {
            color: #ffffff;
            text-align: center;
            margin-bottom: 40px;
            font-size: 36px;
          }

          /* ── Horizontal timeline ── */
          .timeline-track {
            display: flex;
            align-items: flex-start;
            position: relative;
            width: 800px;
            margin: 0 auto 30px;
          }

          .timeline-track::before {
            content: "";
            position: absolute;
            top: 18px;
            left: 60px;
            right: 60px;
            height: 2px;
            background: rgba(255, 255, 255, 0.2);
            z-index: 0;
          }

          .timeline-node {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            position: relative;
            z-index: 2;
            transition: transform 0.2s ease;
          }

          .timeline-node:hover {
            transform: translateY(-2px);
          }

          .node-dot {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.15);
            border: 2px solid rgba(255, 255, 255, 0.35);
            transition: background 0.3s ease, border-color 0.3s ease,
                        box-shadow 0.3s ease, transform 0.3s ease;
          }

          .timeline-node.active .node-dot {
            background: #0077ff;
            border-color: #0077ff;
            box-shadow: 0 0 0 5px rgba(0, 119, 255, 0.22);
            transform: scale(1.2);
          }

          .node-label {
            margin-top: 12px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 13px;
            text-align: center;
            line-height: 1.5;
            max-width: 150px;
            transition: color 0.3s ease;
            user-select: none;
          }

          .timeline-node.active .node-label {
            color: #ffffff;
            font-weight: 600;
          }

          .node-duration {
            font-size: 11px;
            color: rgba(255,255,255,0.45);
            margin-top: 3px;
          }

          .timeline-node.active .node-duration {
            color: #7ab8ff;
          }

          /* ── Expandable cards ── */
          .career-cards {
            width: 800px;
          }

          .career-detail {
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                        opacity 0.35s ease,
                        margin-bottom 0.3s ease;
            margin-bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 12px;
            border: 1px solid transparent;
          }

          .career-detail.expanded {
            max-height: 700px;
            opacity: 1;
            margin-bottom: 16px;
            border-color: rgba(0, 119, 255, 0.25);
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
          }

          .career-detail-inner {
            padding: 24px 32px;
          }

          .career-meta {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 16px;
            flex-wrap: wrap;
          }

          .career-company-badge {
            background: rgba(0, 119, 255, 0.15);
            border: 1px solid rgba(0, 119, 255, 0.3);
            color: #7ab8ff;
            font-size: 13px;
            padding: 3px 12px;
            border-radius: 20px;
          }

          .career-duration-badge {
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: rgba(255,255,255,0.5);
            font-size: 12px;
            padding: 3px 10px;
            border-radius: 20px;
          }

          .career-list {
            color: #ffffff;
            font-size: 17px;
            line-height: 1.85;
            padding-left: 20px;
            margin: 0;
          }

          .career-list li {
            margin-bottom: 8px;
            transition: color 0.25s ease;
          }

          .career-list li:hover {
            color: #a5b4fc;
          }
        `}
      </style>

      <div className="career-wrapper">
        <h1 className="career-section-title">Career</h1>

        <div className="timeline-track">
          {careersData.map((career, i) => (
            <div
              key={i}
              className={`timeline-node ${expandedIndex === i ? "active" : ""}`}
              onClick={() => toggle(i)}
              role="button"
              aria-expanded={expandedIndex === i}
            >
              <div className="node-dot" />
              <div className="node-label">
                <strong>{career.title}</strong>
              </div>
              <div className="node-duration">{career.duration}</div>
            </div>
          ))}
        </div>

        <div className="career-cards">
          {careersData.map((career, i) => (
            <div
              key={i}
              className={`career-detail ${expandedIndex === i ? "expanded" : ""}`}
            >
              <div className="career-detail-inner">
                <div className="career-meta">
                  <span className="career-company-badge">{career.company}</span>
                  <span className="career-duration-badge">{career.duration}</span>
                </div>
                <ul className="career-list">
                  {career.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Careers;
