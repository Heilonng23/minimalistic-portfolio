import { FaReact, FaJava } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiSvelteFill } from "react-icons/ri";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiPostgresql,
  SiSqlite,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";

export function MainStack() {
  return (
    <div className="stacks">
      <div className="main-stack">
        <ul className="my-stack">
          <li>
            <FaReact size={"40px"} alt="React" />
            <p>React</p>
          </li>
          <li>
            <RiNextjsFill size={"40px"} alt="Next.js" />
            <p>Next.js</p>
          </li>
          <li>
            <RiTailwindCssFill size={"40px"} alt="Tailwind CSS" />
            <p>Tailwind CSS</p>
          </li>
          <li>
            <SiTypescript size={"40px"} alt="TypeScript" />
            <p>TypeScript</p>
          </li>
          <li>
            <SiJavascript size={"40px"} alt="JavaScript" />
            <p>JavaScript</p>
          </li>
          <li>
            <RiSvelteFill size={"40px"} alt="Svelte" />
            <p>Svelte</p>
          </li>
        </ul>
        <p className="stack-target">for frontend</p>
      </div>
      <div className="backend-stack">
        <ul className="my-backend-stack">
          <li>
            <SiNodedotjs size={"40px"} alt="Node.js" />
            <p>Node.js</p>
          </li>
          <li>
            <SiTypescript size={"40px"} alt="TypeScript" />
            <p>TypeScript</p>
          </li>
          <li>
            <SiExpress size={"40px"} alt="Express.js" />
            <p>Express.js</p>
          </li>
          <li>
            <FaJava size={"40px"} alt="Java" />
            <p>Java</p>
          </li>
        </ul>
        <p className="stack-target">for backend</p>
      </div>
      <div className="database-stack">
        <ul className="my-database-stack">
          <li>
            <SiPostgresql size={"40px"} alt="PostgreSQL" />
            <p>PostgreSQL</p>
          </li>
          <li>
            <SiSqlite size={"40px"} alt="SQLite" />
            <p>SQLite</p>
          </li>
          <li>
            <SiFirebase size={"40px"} alt="Firebase" />
            <p>Firebase</p>
          </li>
          <li>
            <SiSupabase size={"40px"} alt="Supabase" />
            <p>Supabase</p>
          </li>
        </ul>
        <p className="stack-target">for database</p>
      </div>
    </div>
  );
}
