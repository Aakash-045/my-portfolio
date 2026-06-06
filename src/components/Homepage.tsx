import { useState, useEffect } from "react";
import HomepageSection from "./HomepageSection";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState<
    "about" | "contact" | "projects" | "careers" | null
  >(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}Aakash_Resume.pdf`;
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
            height: 56px;
            align-items: center;
            justify-content: space-between;
            padding: 0 28px;
            position: sticky;
            top: 0;
            z-index: 1000;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            background: rgba(0, 0, 0, 0.3);
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            transition: box-shadow 0.3s ease, background 0.3s ease,
                        border-bottom-color 0.3s ease;
          }

          .navbar--scrolled {
            background: rgba(0, 0, 0, 0.55);
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
            border-bottom-color: rgba(255, 255, 255, 0.18);
          }

          .logo {
            color: white;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 0.04em;
            cursor: pointer;
            margin: 0;
            user-select: none;
          }

          .logo:hover {
            color: #FA8128;
            transition: color 0.2s ease;
          }

          .nav-list {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 0;
            margin: 0;
            list-style: none;
          }

          .nav-item {
            list-style: none;
            color: rgba(255, 255, 255, 0.8);
            cursor: pointer;
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            padding: 6px 12px;
            border-radius: 4px;
            position: relative;
            transition: color 0.2s ease;
            user-select: none;
          }

          .nav-item::after {
            content: "";
            position: absolute;
            bottom: 2px;
            left: 12px;
            right: 12px;
            height: 2px;
            background: #FA8128;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.25s ease;
          }

          .nav-item:hover {
            color: #ffffff;
          }

          .nav-item:hover::after {
            transform: scaleX(1);
          }

          .nav-item.active-nav {
            color: #ffffff;
          }

          .nav-item.active-nav::after {
            transform: scaleX(1);
            background: #0077ff;
          }

          .nav-button {
            margin-left: 8px;
            padding: 7px 18px;
            border: 2px solid rgba(255, 255, 255, 0.8);
            border-radius: 20px;
            background-color: transparent;
            color: rgba(255, 255, 255, 0.8);
            cursor: pointer;
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 0.04em;
            transition: background-color 0.25s ease, color 0.25s ease,
                        border-color 0.25s ease, transform 0.2s ease;
          }

          .nav-button:hover {
            background-color: #FA8128;
            color: #000000;
            border-color: #FA8128;
            transform: scale(1.04);
          }
        `}
      </style>

      <div className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
        <p className="logo" onClick={() => setActiveSection(null)}>
          Aakash M
        </p>

        <ul className="nav-list">
          <li
            className={`nav-item ${activeSection === null ? "active-nav" : ""}`}
            onClick={() => setActiveSection(null)}
          >
            Home
          </li>
          <li
            className={`nav-item ${activeSection === "about" ? "active-nav" : ""}`}
            onClick={() => setActiveSection("about")}
          >
            About
          </li>
          <li
            className={`nav-item ${activeSection === "projects" ? "active-nav" : ""}`}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </li>
          <li
            className={`nav-item ${activeSection === "careers" ? "active-nav" : ""}`}
            onClick={() => setActiveSection("careers")}
          >
            Career
          </li>
          <li
            className={`nav-item ${activeSection === "contact" ? "active-nav" : ""}`}
            onClick={() => setActiveSection("contact")}
          >
            Contact
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
