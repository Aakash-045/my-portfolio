import { useState, useEffect, useRef } from "react";

const stats = [
  { label: "Years Experience", target: 1, suffix: "+" },
  { label: "Integrations Built", target: 10, suffix: "+" },
  { label: "Companies", target: 2, suffix: "" },
];

const AboutSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          stats.forEach((stat, i) => {
            const duration = 1500;
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - (1 - progress) * (1 - progress);
              setCounts((prev) => {
                const next = [...prev];
                next[i] = Math.round(eased * stat.target);
                return next;
              });
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          .about-wrapper {
            display: grid;
            place-items: center;
            padding: 40px 20px;
          }

          .about-card {
            width: 750px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 12px;
            padding: 30px 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .about-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
          }

          .stats-row {
            display: flex;
            justify-content: space-around;
            margin-bottom: 30px;
            padding: 20px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          }

          .stat-item {
            text-align: center;
          }

          .stat-number {
            font-size: 42px;
            font-weight: 700;
            color: #0077ff;
            line-height: 1;
            font-variant-numeric: tabular-nums;
          }

          .stat-label {
            font-size: 12px;
            color: #b3d4ff;
            margin-top: 6px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
          }

          .about-title {
            color: #ffffff;
            text-align: center;
            margin-bottom: 25px;
            font-size: 36px;
          }

          .about-list {
            color: #ffffff;
            font-size: 18px;
            line-height: 1.8;
            padding-left: 20px;
          }

          .about-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 10px;
            transition: color 0.3s ease, padding-left 0.3s ease;
          }

          .about-list li:hover {
            color: #a5b4fc;
            cursor: default;
            padding-left: 16px;
          }

          @media (max-width: 768px) {
            .about-card {
              width: 100%;
            }

            .about-title {
              font-size: 28px;
            }

            .stat-number {
              font-size: 32px;
            }
          }
        `}
      </style>

      <div className="about-wrapper">
        <div className="about-card" ref={cardRef}>
          <div className="stats-row">
            {stats.map((stat, i) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-number">
                  {counts[i]}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <h1 className="about-title">About Me</h1>

          <ul className="about-list">
            <li>
              I am a Web Developer and Solutions Engineer with a strong focus on
              building user-friendly applications and delivering scalable
              integration solutions.
            </li>
            <li>
              As a Web Developer, I have strong expertise in HTML, CSS, and
              JavaScript, and hands-on experience with modern technologies such
              as React.js, Node.js, and MongoDB.
            </li>
            <li>
              I have successfully developed and enhanced production-level
              features such as Password Vault and Admin Reporting.
            </li>
            <li>
              As a Solutions Engineer, I specialize in integrating third-party
              applications such as Box, Slack, and Microsoft Dynamics based on
              business requirements.
            </li>
            <li>
              I have extensive experience implementing OAuth 2.0 and API
              key–based authentication for secure system integrations.
            </li>
            <li>
              I build automation workflows using Node.js, including triggers,
              actions, wait events, and conditional logic.
            </li>
            <li>
              I have hands-on experience working with SDKs and REST APIs to
              design and implement reliable and scalable integrations.
            </li>
            <li>
              I possess good knowledge of SQL querying and NoSQL databases like
              MongoDB.
            </li>
            <li>
              I am a quick learner who enjoys exploring new technologies,
              frameworks, and best development practices.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
