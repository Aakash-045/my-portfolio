import { useState, useEffect, useRef } from "react";
import MyImage from "../assets/MyImage.png";
import AboutSection from "./About";
import Careers from "./CareerSection";
import Contact from "./ContactSection";
import Projects from "./ProjectSection";

const phrases = [
  "Web Developer & Solutions Engineer",
  "Integration Specialist",
  "Full Stack Developer",
];

const HomepageSection = (props: any) => {
  const { activeSection } = props;
  console.log(activeSection);

  const frontendSkills = ["React.js", "HTML", "CSS", "JavaScript"];
  const backendSkills = ["Node.js", "Express", "SQL (Intermediate)"];
  const otherSkills = [
    "Integration",
    "OAuth2.0",
    "MCP",
    "LLM",
    "Webhooks",
    "Git",
    "API",
  ];

  // ── Typewriter state ──
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseBeforeDelete = 1800;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentPhrase.slice(0, charIndex + 1));
        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayedText(currentPhrase.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((p) => (p + 1) % phrases.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  // ── Mouse glow ──
  const heroRef = useRef<HTMLDivElement>(null);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    heroRef.current!.style.setProperty(
      "--glow-x",
      `${e.clientX - rect.left}px`,
    );
    heroRef.current!.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  };

  const handleHeroMouseLeave = () => {
    heroRef.current?.style.setProperty("--glow-x", `-400px`);
    heroRef.current?.style.setProperty("--glow-y", `-400px`);
  };

  // ── 3D tilt ──
  const imageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0 });
  const [isTilting, setIsTilting] = useState(false);

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ rotX: -dy * 10, rotY: dx * 10 });
    setIsTilting(true);
  };

  const handleImageMouseLeave = () => {
    setTilt({ rotX: 0, rotY: 0 });
    setIsTilting(false);
  };

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
        /* ── Hero section ── */
        .home-section {
          min-height: calc(100vh - 56px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* Mouse glow */
        .home-section::before {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          pointer-events: none;
          background: radial-gradient(
            600px circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgba(0, 119, 255, 0.10),
            transparent 70%
          );
          z-index: 0;
        }

        .home-section > * {
          position: relative;
          z-index: 1;
        }

        /* ── Circular profile image ── */
        .image-container {
          margin-bottom: 28px;
          perspective: 800px;
          cursor: default;
        }

        .profile-image {
          width: 180px;
          height: 180px;
          object-fit: cover;
          object-position: top;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            0 0 0 10px rgba(255, 255, 255, 0.10),
            0 20px 50px rgba(0, 0, 0, 0.55);
          will-change: transform;
          display: block;
        }

        .profile-image.spring-back {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* ── Hero text ── */
        .hero-name {
          font-size: 52px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px;
          line-height: 1.1;
        }

        .hero-role {
          font-size: 16px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.65);
          margin: 0 0 32px;
          min-height: 1.6em;
        }

        .typewriter-phrase {
          color: #FA8128;
          font-weight: 600;
        }

        .typewriter-cursor {
          display: inline-block;
          width: 2px;
          height: 0.85em;
          background: #FA8128;
          margin-left: 2px;
          vertical-align: middle;
          animation: cursorBlink 0.75s step-end infinite;
        }

        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* ── CTA buttons ── */
        .hero-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 0;
        }

        .know-more {
          padding: 11px 26px;
          border-radius: 6px;
          background-color: #0077ff;
          color: white;
          font-size: 15px;
          cursor: pointer;
          border: none;
          transition: background-color 0.25s ease, transform 0.2s ease,
                      box-shadow 0.25s ease;
        }

        .know-more:hover {
          background-color: #005fd1;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 119, 255, 0.4);
        }

        /* ── Skills section (below fold) ── */
        .skills-wrapper {
          margin-top: 56px;
          width: 100%;
          max-width: 680px;
        }

        .skills-title {
          color: #fff;
          margin-bottom: 16px;
          font-size: 20px;
        }

        .skills-subtitle {
          color: #b3d4ff;
          margin: 18px 0 10px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .skills-group {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .skill-chip {
          padding: 9px 16px;
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          border-radius: 20px;
          color: white;
          font-size: 13px;
          opacity: 0;
          transform: translateY(16px);
          animation: chipFadeUp 0.55s ease forwards;
          background: rgba(255, 255, 255, 0.05);
          transition: background 0.25s ease, transform 0.25s ease,
                      box-shadow 0.25s ease, border-color 0.25s ease;
          cursor: default;
        }

        .skill-chip:hover {
          background: #0077ff;
          transform: translateY(-4px) scale(1.06);
          box-shadow: 0 8px 20px rgba(0, 119, 255, 0.4);
          border-color: #0077ff;
        }

        @keyframes chipFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Section content below hero ── */
        .section-wrapper {
          margin-top: 60px;
          animation: fadeSlideUp 0.7s ease forwards;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>

      <div
        className="home-section"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        {/* Circular profile photo */}
        <div
          className="image-container"
          ref={imageRef}
          onMouseMove={handleImageMouseMove}
          onMouseLeave={handleImageMouseLeave}
        >
          <img
            src={MyImage}
            alt="Aakash M"
            className={`profile-image ${!isTilting ? "spring-back" : ""}`}
            style={{
              transform: `rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg)${isTilting ? " scale(1.05)" : ""}`,
            }}
          />
        </div>

        {/* Name heading */}
        <h1 className="hero-name">
          Hello, I'm <span style={{ color: "#FA8128" }}>Aakash M</span>
        </h1>

        {/* Typewriter role */}
        <p className="hero-role">
          <span className="typewriter-phrase">{displayedText}</span>
          <span className="typewriter-cursor" />
        </p>

        {/* Skills — centered below CTA */}
        <div className="skills-wrapper">
          <h3 className="skills-title">Skills</h3>

          <p className="skills-subtitle">Frontend</p>
          <div className="skills-group">{renderSkills(frontendSkills, 0)}</div>

          <p className="skills-subtitle">Backend</p>
          <div className="skills-group">
            {renderSkills(backendSkills, frontendSkills.length)}
          </div>

          <p className="skills-subtitle">Integrations & Others</p>
          <div className="skills-group">
            {renderSkills(
              otherSkills,
              frontendSkills.length + backendSkills.length,
            )}
          </div>
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
