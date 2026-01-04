const AboutSection = () => {
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
            transition: color 0.3s ease;
          }

          .about-list li:hover {
            color: #a5b4fc;
            cursor: pointer;
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
