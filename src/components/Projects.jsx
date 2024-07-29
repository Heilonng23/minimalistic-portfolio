import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import resumeio from "../img/resumeio.png";
import algorithm from "../img/12algor.png";
import fictionheaven from "../img/fictionheaven.png";
import marvelinfo from "../img/marvelinfo.png";

export function Projects() {
  return (
    <div className="projects" id="projects">
      <p className="title"> Projects</p>
      <div className="project">
        <div>
          <p className="titleofproject">Resume.io</p>
          <p className="description">
            Resume io is an online resume builder tool that helps you to build a
            fast and good looking resume in matter of minutes
          </p>
          <div className="buttons">
            <button type="button" className="Button">
              <a href="https://resumeio-delta.vercel.app/" target="_blank">
                <span data-text=" Live Demo"> Live Demo </span>
              </a>
            </button>
            <button type="button" className="Button">
              <a href="https://github.com/Heilonng23/resumeio" target="_blank">
                <span data-text="Source Code"> Source Code </span>
              </a>
            </button>
          </div>

          <img src={resumeio} />
        </div>
        <div className="stacksofproject">
          <p
            style={{
              marginBottom: "8px",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            Tech stack
          </p>
          <ul className="projectstack">
            <li>
              <FaReact size={"40px"} />
              <p>React</p>
            </li>
            <li>
              <RiNextjsFill size={"40px"} />
              <p>Next.js</p>
            </li>
            <li>
              <RiTailwindCssFill size={"40px"} />
              <p>TailwindCSS</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="project">
        <div>
          <p className="titleofproject" style={{ marginTop: "20px" }}>
            Algorithtm Visualization
          </p>
          <p className="description">
            Algorithm Visualization is a web application that helps you to
            visualize breadth-first search, depth-first search, and A* search
            algorithms.
          </p>
          <div className="buttons">
            <button type="button" className="Button">
              <a
                href="https://path-finder-algorithm.vercel.app/"
                target="_blank"
              >
                <span data-text=" Live Demo"> Live Demo </span>
              </a>
            </button>
            <button type="button" className="Button">
              <a
                href="https://github.com/Heilonng23/Path-finder-Algorithm"
                target="_blank"
              >
                <span data-text="Source Code"> Source Code </span>
              </a>
            </button>
          </div>
          <img src={algorithm} />
        </div>
        <div className="stacksofproject">
          <p
            style={{
              marginBottom: "8px",
              fontSize: "25px",
              fontWeight: "600",
            }}
          >
            Tech stack
          </p>
          <ul className="projectstack">
            <li>
              <FaReact size={"40px"} />
              <p>React</p>
            </li>
            <li>
              <SiTypescript size={"40px"} />
              <p>Typescript</p>
            </li>
            <li>
              <RiTailwindCssFill size={"40px"} />
              <p>TailwindCSS</p>
            </li>
          </ul>
        </div>
        <div className="project">
          <div>
            <p className="titleofproject" style={{ marginTop: "20px" }}>
              Fiction Heaven{" "}
            </p>
            <p className="description">
              Fiction Heaven is a web application that helps you to track the
              movies and tv shows you have watched. You can also rate them,
              track the movies and tv shows.{" "}
            </p>
            <div className="buttons">
              <button type="button" className="Button">
                <a
                  href="https://fictionheaven-cfgx237k7-heilonng23s-projects.vercel.app/"
                  target="_blank"
                >
                  <span data-text=" Live Demo"> Live Demo </span>
                </a>
              </button>
              <button type="button" className="Button">
                <a
                  href="https://github.com/Heilonng23/fictionheavencom"
                  target="_blank"
                >
                  <span data-text="Source Code"> Source Code </span>
                </a>
              </button>
            </div>
            <img src={fictionheaven} />
          </div>
          <div className="stacksofproject">
            <p
              style={{
                marginBottom: "8px",
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              Tech stack
            </p>
            <ul className="projectstack">
              <li>
                <FaReact size={"40px"} />
                <p>React</p>
              </li>
              <li>
                <RiNextjsFill size={"40px"} />
                <p>Next.js</p>
              </li>
              <li>
                <RiTailwindCssFill size={"40px"} />
                <p>TailwindCSS</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="project">
          <div>
            <p className="titleofproject" style={{ marginTop: "20px" }}>
              Marvel Info
            </p>
            <p className="description">
              Marvel Info is a web application that helps you to get information
              about marvel characters, comics, and movies.
            </p>
            <div className="buttons">
              <button type="button" className="Button">
                <a href="https://marvel-info-io.vercel.app/" target="_blank">
                  <span data-text=" Live Demo"> Live Demo </span>
                </a>
              </button>
              <button type="button" className="Button">
                <a
                  href="https://github.com/Heilonng23/marvel-info.io"
                  target="_blank"
                >
                  <span data-text="Source Code"> Source Code </span>
                </a>
              </button>
            </div>
            <img src={marvelinfo} />
          </div>
          <div className="stacksofproject">
            <p
              style={{
                marginBottom: "8px",
                fontSize: "25px",
                fontWeight: "600",
              }}
            >
              Tech stack
            </p>
            <ul className="projectstack">
              <li>
                <FaReact size={"40px"} />
                <p>React</p>
              </li>
              <li>
                <RiNextjsFill size={"40px"} />
                <p>Next.js</p>
              </li>
              <li>
                <RiTailwindCssFill size={"40px"} />
                <p>TailwindCSS</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
