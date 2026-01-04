const Contact = () => {
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
            .list{
            display: flex;
            }
        `}
      </style>

      <div className="about-wrapper">
        <div className="about-card">
          <h1 className="about-title">Get in Touch</h1>

          <ul>
            <li>
              <b>Email: </b>
              <a href="mailto:aakashmuthukrishnan18@gmail.com">
                aakashmuthukrishnan18@gmail.com
              </a>
            </li>
            <li>
              <p>
                <b>Phone: </b> +91 6383786446
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                <b>LinkedIn: </b>{" "}
                <a
                  href="https://www.linkedin.com/in/aakash-m-99b11b235"
                  target="_blank"
                >
                  https://www.linkedin.com/in/aakash-m-99b11b235
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
