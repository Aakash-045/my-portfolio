import { useState, useEffect } from "react";

const Contact = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    const fallback = () => {
      const el = document.createElement("textarea");
      el.value = text;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopiedKey(key);
    };

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => setCopiedKey(key))
        .catch(fallback);
    } else {
      fallback();
    }
  };

  useEffect(() => {
    if (!copiedKey) return;
    const timer = setTimeout(() => setCopiedKey(null), 2000);
    return () => clearTimeout(timer);
  }, [copiedKey]);

  return (
    <>
      <style>
        {`
          .about-wrapper {
            display: grid;
            place-items: center;
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

          .about-title {
            color: #ffffff;
            text-align: center;
            margin-bottom: 25px;
            font-size: 36px;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 18px;
            color: #ffffff;
            font-size: 17px;
          }

          .contact-item a {
            color: #a5b4fc;
            word-break: break-all;
          }

          .contact-item a:hover {
            color: #0077ff;
          }

          .copy-btn {
            background: transparent;
            border: none;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.4);
            padding: 4px;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            transition: color 0.2s ease, transform 0.2s ease;
            line-height: 0;
            flex-shrink: 0;
          }

          .copy-btn:hover {
            color: #0077ff;
            transform: scale(1.2);
            border-color: transparent;
          }

          .copy-btn.copied {
            color: #4ade80;
          }

          .toast {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background: rgba(0, 119, 255, 0.9);
            color: #fff;
            padding: 10px 22px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            backdrop-filter: blur(6px);
            opacity: 0;
            pointer-events: none;
            z-index: 9999;
          }

          .toast.visible {
            animation: toastFadeInOut 2s ease forwards;
          }

          @keyframes toastFadeInOut {
            0%   { opacity: 0; transform: translateX(-50%) translateY(20px); }
            12%  { opacity: 1; transform: translateX(-50%) translateY(0);    }
            75%  { opacity: 1; transform: translateX(-50%) translateY(0);    }
            100% { opacity: 0; transform: translateX(-50%) translateY(-10px);}
          }

          @media (max-width: 768px) {
            .about-card {
              width: 100%;
            }

            .about-title {
              font-size: 28px;
            }
          }
        `}
      </style>

      <div className="about-wrapper">
        <div className="about-card">
          <h1 className="about-title">Get in Touch</h1>

          <div className="contact-item">
            <b>Email:</b>
            <a href="mailto:aakashmuthukrishnan18@gmail.com">
              aakashmuthukrishnan18@gmail.com
            </a>
            <button
              className={`copy-btn ${copiedKey === "email" ? "copied" : ""}`}
              onClick={() =>
                handleCopy("aakashmuthukrishnan18@gmail.com", "email")
              }
              title="Copy email"
            >
              {copiedKey === "email" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
              )}
            </button>
          </div>

          <div className="contact-item">
            <b>Phone:</b>
            <span>+91 6383786446</span>
            <button
              className={`copy-btn ${copiedKey === "phone" ? "copied" : ""}`}
              onClick={() => handleCopy("+916383786446", "phone")}
              title="Copy phone number"
            >
              {copiedKey === "phone" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
              )}
            </button>
          </div>

          <div className="contact-item">
            <b>LinkedIn:</b>
            <a
              href="https://www.linkedin.com/in/aakash-m-99b11b235"
              target="_blank"
              rel="noreferrer"
            >
              www.linkedin.com/in/aakash-m-solutions-engineer
            </a>
          </div>
        </div>
      </div>

      <div
        key={copiedKey ?? "idle"}
        className={`toast ${copiedKey ? "visible" : ""}`}
      >
        Copied to clipboard!
      </div>
    </>
  );
};

export default Contact;
