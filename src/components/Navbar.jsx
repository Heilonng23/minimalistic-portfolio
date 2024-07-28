import me from "../img/bgpro.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Navbar() {
  return (
    <nav className="vertical-navbar">
      <img src={me} alt={me} />
      <div className="nameTitle">
        <p
          style={{ fontSize: "25px", fontWeight: "600", marginBottom: "10px" }}
        >
          Ibragim Ibragimov
        </p>
        <p className="email">
          {" "}
          <a
            href="mailto:ibrahimov.ibrahm@gmail.com"
            style={{ textDecoration: "none" }}
          >
            ibrahimov.ibrahm@gmail.com
          </a>
        </p>
      </div>
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
      </ul>
      <ul className="contactList">
        <li>
          <a
            href="https://www.linkedin.com/in/ibragim-ibragimov-1b606024b/"
            style={{ textDecoration: "underline" }}
            target="_blank"
          >
            <CiLinkedin size={"40px"} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Heilonng23"
            style={{ textDecoration: "underline" }}
            target="_blank"
          >
            <FaGithub size={"40px"} />
          </a>
        </li>
        <li>
          <a href="mailto:ibrahimov.ibrahm@gmail.com">
            <SiGmail size={"40px"} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
