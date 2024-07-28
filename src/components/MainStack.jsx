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
          </li>
          <li>
            <RiNextjsFill size={"40px"} alt="Next.js" />
          </li>
          <li>
            <RiTailwindCssFill size={"40px"} alt="Tailwind CSS" />
          </li>
          <li>
            <SiTypescript size={"40px"} alt="TypeScript" />
          </li>
          <li>
            <SiJavascript size={"40px"} alt="JavaScript" />
          </li>
          <li>
            <RiSvelteFill size={"40px"} alt="Svelte" />
          </li>
        </ul>
        <p>for frontend</p>
      </div>
      <div className="backend-stack">
        <ul className="my-backend-stack">
          <li>
            <SiNodedotjs size={"40px"} alt="Node.js" />
          </li>
          <li>
            <SiTypescript size={"40px"} alt="TypeScript" />
          </li>
          <li>
            <SiExpress size={"40px"} alt="Express.js" />
          </li>
          <li>
            <FaJava size={"40px"} alt="Java" />
          </li>
        </ul>
        <p>for backend</p>
      </div>
      <div className="database-stack">
        <ul className="my-database-stack">
          <li>
            <SiPostgresql size={"40px"} alt="PostgreSQL" />
          </li>
          <li>
            <SiSqlite size={"40px"} alt="SQLite" />
          </li>
          <li>
            <SiFirebase size={"40px"} alt="Firebase" />
          </li>
          <li>
            <SiSupabase size={"40px"} alt="Supabase" />
          </li>
        </ul>
        <p>for database</p>
      </div>
    </div>
  );
}
