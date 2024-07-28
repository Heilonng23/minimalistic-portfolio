export function Experience() {
  return (
    <div className="experience">
      <div className="box box-4" style={{ marginTop: "0" }}>
        <p
          style={{ fontSize: "45px", fontWeight: "600", marginBottom: "50px" }}
          id="experience"
        >
          Experience
        </p>
        <div className="experiences" style={{ marginBottom: "100px" }}>
          <p style={{ fontSize: "24px", fontWeight: "600" }}>
            Software Engineer
          </p>
          <div className="yearandname">
            <p
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginRight: "30px",
              }}
            >
              @Sinus.ge
            </p>
            <p
              style={{
                fontSize: "19px",
                fontWeight: "600",
                marginTop: "4px",
              }}
            >
              October 2023 - Present
            </p>
          </div>
          <ul>
            <li>
              Built and maintained web applications using React, Next.js, and
              Tailwind CSS.
            </li>
            <li>
              Designed and supported RESTful APIs with Node.js and Express.js.
            </li>
            <li>Managed and maintained PostgreSQL databases.</li>
            <li>Worked with and improved TypeScript codebases.</li>
          </ul>
        </div>
        <div>
          <p style={{ fontSize: "24px", fontWeight: "600" }}>
            Software Engineer intern
          </p>
          <div className="yearandname">
            <p
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginRight: "30px",
              }}
            >
              @PJATK
            </p>
            <p
              style={{
                fontSize: "19px",
                fontWeight: "600",
                marginTop: "4px",
              }}
            >
              May 2022 - October 2023
            </p>
          </div>
          <ul>
            <li>
              Developed a project management tool using React for the frontend.
            </li>
            <li>
              Created a Java-based RESTful API backend for secure data handling.
            </li>
            <li>Used MySQL for efficient data storage and retrieval.</li>
            <li>Implemented user authentication with JWT for secure access.</li>
            <li>
              Deployed on AWS with CI/CD for automated testing and deployment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
